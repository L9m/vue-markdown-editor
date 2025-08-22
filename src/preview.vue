<template>
  <div
    class="v-md-editor-preview"
    :style="{
      tabSize,
      '-moz-tab-size': tabSize,
      '-o-tab-size': tabSize,
    }"
    @click="handlePreviewClick"
  >
    <div style="position: fixed; top: 0; right: 180px; z-index: 1000">
      {{ time }}
    </div>
    <div
      ref="preview"
      :class="[previewClass]"
    >
      <component
        v-for="vNode in currentVNode"
        :key="vNode.key"
        :is="vNode"
      />
    </div>
  </div>
</template>

<script>
import { reactive, nextTick, h, Text } from 'vue';
import { VMdParser } from '@/utils/v-md-parser';
import QMCursor from '@/components/qm-cursor.vue';

// mixins
import PreviewMixin from '@/mixins/preview';

let fullVnodeTree = null;

/**
 * 深度优先搜索算法，寻找VNode树中下一个文本节点的路径
 *
 * @param {Object|Array} tree - Vue VNode树或节点数组
 * @param {Array|null} prevPath - 前一个文本节点的路径，null表示查找第一个文本节点
 * @returns {Array|null} 下一个文本节点的路径数组，未找到返回null
 */
const findNextTextNodePath = (tree, prevPath = null) => {
  // 标志位：是否已找到前一个文本节点位置
  let foundPrev = prevPath === null;

  const pathsEqual = (path1, path2) => {
    if (path1.length !== path2.length) return false;
    for (let i = 0; i < path1.length; i++) {
      if (path1[i] !== path2[i]) return false;
    }
    return true;
  };

  /**
   * 深度优先搜索递归函数
   * @param {Object|Array} node - 当前遍历的节点
   * @param {Array} path - 当前路径（可变引用，会被修改）
   * @returns {Array|null} 找到的文本节点路径副本
   */
  const dfs = (node, path) => {
    if (!node) return null;

    // 处理节点数组（如children数组）
    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        path.push(i); // 添加数组索引到路径
        const result = dfs(node[i], path);
        if (result) {
          path.pop(); // 恢复路径状态
          return result;
        }
        path.pop(); // 恢复路径状态
      }
      return null;
    }

    // 检查是否为文本节点
    if (node.type === Text) {
      if (prevPath === null) {
        // 没有前置路径，返回第一个文本节点
        return [...path]; // 返回路径副本
      } else if (!foundPrev && pathsEqual(path, prevPath)) {
        // 找到前一个文本节点，标记已找到，继续搜索下一个
        foundPrev = true;
      } else if (foundPrev) {
        // 已跳过前一个节点，返回当前文本节点路径
        return [...path]; // 返回路径副本
      }
    }

    // 递归处理子节点
    if (node.children && Array.isArray(node.children)) {
      path.push('children'); // 添加children属性到路径
      const result = dfs(node.children, path);
      if (result) {
        path.pop(); // 恢复路径状态
        return result;
      }
      path.pop(); // 恢复路径状态
    }

    return null;
  };

  // 从根节点开始搜索，初始路径为空数组
  return dfs(tree, []);
};

/**
 * 在VNode树的最后一个文本节点后插入QMCursor组件
 * 返回插入光标后的新VNode树
 *
 * @param {Object|Array} tree - Vue VNode树或节点数组
 * @returns {Object|Array} 插入光标后的新VNode树，如果没有文本节点则返回原树
 */
const insertQMCursorAfterLastText = (tree) => {
  let lastTextPath = null;

  // 深度克隆树结构
  const cloneTree = (node) => {
    if (!node) return node;

    if (Array.isArray(node)) {
      return node.map(cloneTree);
    }

    if (typeof node === 'object' && node.type) {
      const cloned = { ...node };
      if (node.children) {
        cloned.children = cloneTree(node.children);
      }
      return cloned;
    }

    return node;
  };

  // 先查找最后一个文本节点的路径
  const findLastTextPath = (node, path) => {
    if (!node) return;

    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        path.push(i);
        findLastTextPath(node[i], path);
        path.pop();
      }
      return;
    }

    if (node.type === Text) {
      lastTextPath = [...path];
    }

    if (node.children && Array.isArray(node.children)) {
      path.push('children');
      findLastTextPath(node.children, path);
      path.pop();
    }
  };

  // 查找最后一个文本节点
  findLastTextPath(tree, []);

  // 如果没有找到文本节点，返回原树
  if (!lastTextPath) {
    return tree;
  }

  // 克隆树并插入光标
  const newTree = cloneTree(tree);

  // 获取父容器路径和文本节点索引
  const parentPath = lastTextPath.slice(0, -1);
  const textIndex = lastTextPath[lastTextPath.length - 1];

  // 导航到父容器
  let parent = newTree;
  for (const pathSegment of parentPath) {
    parent = parent[pathSegment];
  }

  // 确保父容器是数组
  if (!Array.isArray(parent)) {
    console.warn('Cannot insert cursor: parent is not an array');
    return newTree;
  }

  // 创建QMCursor组件并插入到文本节点后
  const qmCursor = h(QMCursor, { key: 'qm-cursor-' + Date.now() });
  parent.splice(textIndex + 1, 0, qmCursor);

  return newTree;
};

const component = {
  name: 'v-md-preview',
  mixins: [PreviewMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
    beforeChange: Function,
    typing: Boolean,
    showCursor: Boolean,
    typeOptions: {
      type: Object,
      default: () => ({
        step: 1,
        interval: 16,
      }),
    },
  },
  emits: ['change', 'typingStart', 'typing', 'typingEnd'],
  data() {
    return {
      currentVNode: null,
      isRendering: false,
      isTyping: false,
      currentPath: null,
      currentTextIndex: 0,
      time: 0,
    };
  },
  watch: {
    text() {
      if (!this.typing) {
        this.parser(this.text);
        return;
      }

      nextTick(() => this.typewriterStart());
    },
    langConfig() {
      this.parser();
    },
  },
  computed: {
    vMdParser() {
      return this.$options.vMdParser;
    },
    previewClass() {
      return this.vMdParser.themeConfig.previewClass;
    },
    langConfig() {
      return this.vMdParser.lang.config;
    },
  },
  methods: {
    parserContent(step = 1) {
      const start = performance.now();
      if (!this.currentPath) {
        this.currentPath = findNextTextNodePath(fullVnodeTree);
      }

      // 根据路径访问节点
      let currentNode = fullVnodeTree;
      for (const key of this.currentPath) {
        currentNode = currentNode[key];
      }

      if (this.currentTextIndex >= currentNode.children.length) {
        this.currentPath = findNextTextNodePath(fullVnodeTree, this.currentPath);
        this.currentTextIndex = 0;
      } else {
        // 获取下一个字符索引，根据step跳过字符
        this.currentTextIndex = this.getNextCharIndex(
          currentNode.children,
          this.currentTextIndex,
          step
        );
      }

      this.currentVNode = this.sliceVNodeTree(
        fullVnodeTree,
        this.currentPath,
        this.currentTextIndex
      );
      this.time = performance.now() - start;
    },

    // 获取下一个有效字符索引，根据step递增，特殊字符一次性跳过
    getNextCharIndex(text, currentIndex, step) {
      let nextIndex = currentIndex + step;

      // 跳过连续的空白字符
      while (nextIndex < text.length && this.isWhitespace(text[nextIndex])) {
        nextIndex++;
      }

      return nextIndex;
    },

    // 判断是否为特殊字符
    isWhitespace(char) {
      return /^\s$/u.test(char); // 严格匹配单个空白字符，支持Unicode
    },

    sliceVNodeTree(tree, targetPath, textIndex) {
      if (!tree || !targetPath) return tree;

      let found = false; // 标记是否已找到目标

      const slice = (node, path) => {
        if (!node || found) return null; // 找到目标后直接返回

        if (Array.isArray(node)) {
          const result = [];
          for (let i = 0; i < node.length; i++) {
            if (found) break; // 找到目标后停止遍历

            const currentPath = [...path, i];
            const relation = this.comparePathRelation(currentPath, targetPath);

            if (relation === 'equal') {
              // 找到目标节点
              if (node[i].type === Text) {
                const text = node[i].children || '';

                const slicedText = text.slice(0, textIndex);
                result.push({ ...node[i], children: slicedText });
                if (this.showCursor) {
                  result.push(h(QMCursor));
                }
              } else {
                result.push({ ...node[i] });
              }
              found = true; // 标记已找到
              break;
            } else if (relation === 'before') {
              // 在目标之前，完整保留
              result.push({ ...node[i] });
            } else if (relation === 'contains') {
              // 包含目标路径，递归处理
              const sliced = slice(node[i], currentPath);
              if (sliced) {
                result.push(sliced);
                if (found) break; // 递归中找到了目标，停止
              }
            } else if (relation === 'after') {
              // 在目标之后，停止遍历
              break;
            }
          }
          return result;
        }

        // 单个节点处理
        const relation = this.comparePathRelation(path, targetPath);
        if (relation === 'equal') {
          found = true;
          if (node.type === Text) {
            const text = node.children || '';
            const slicedText = text.slice(0, textIndex);
            return { ...node, children: slicedText };
          } else {
            return { ...node };
          }
        } else if (relation === 'contains') {
          const cloned = { ...node };
          if (node.children && Array.isArray(node.children)) {
            cloned.children = slice(node.children, [...path, 'children']);
          }
          return cloned;
        } else if (relation === 'before') {
          return { ...node };
        }

        return null;
      };

      const result = slice(tree, []);
      this.currentVNode = result;
      return result;
    },

    // 统一的路径比较方法
    comparePathRelation(path1, path2) {
      const minLength = Math.min(path1.length, path2.length);

      // 比较共同部分
      for (let i = 0; i < minLength; i++) {
        if (path1[i] < path2[i]) return 'before';
        if (path1[i] > path2[i]) return 'after';
      }

      // 前面部分都相等
      if (path1.length === path2.length) return 'equal';
      if (path1.length < path2.length) return 'contains'; // path1 包含 path2
      return 'contained'; // path1 被 path2 包含
    },

    parser(content) {
      if (this.isRendering) {
        return;
      }
      this.isRendering = true;
      const next = (text) => {
        let vNode = this.$options.vMdParser.parse(text);
        if (this.showCursor) {
          vNode = insertQMCursorAfterLastText(vNode);
        }

        this.currentVNode = vNode;
        this.isRendering = false;
      };

      if (this.beforeChange) {
        this.beforeChange(content, next);
      } else {
        next(content);
      }
    },

    typewriterEnd() {
      clearTimeout(this.timer);
      this.isTyping = false;
      this.$emit('typingEnd');
    },

    typewriterStart() {
      clearTimeout(this.timer);
      fullVnodeTree = this.$options.vMdParser.parse(this.text);

      this.isTyping = true;
      this.$emit('typingStart');
      const options = { ...this.typeOptions };

      const typingStep = () => {
        let step = options.step;
        if (Array.isArray(options.step)) {
          step = options.step[0] + Math.floor(Math.random() * (options.step[1] - options.step[0]));
        }

        this.parserContent(step);
        this.$emit('typing');

        if (!this.currentPath) {
          this.typewriterEnd();
          return;
        }

        this.timer = setTimeout(typingStep, options.interval);
      };

      this.timer = setTimeout(typingStep);
    },

    /**
     * 在 vNode 数组中找到最深层的 HTML 标签节点并插入光标
     */
    insertCursorToDeepestNode(vNodes) {
      if (!vNodes?.length) return;

      const lastNode = vNodes[vNodes.length - 1];
      const deepestNode = this.findDeepestHtmlNode(lastNode);

      if (deepestNode) {
        deepestNode.children = deepestNode.children || [];
        deepestNode.children.push(h(QMCursor));
      }
    },

    /**
     * 递归查找最深层的 HTML 标签节点
     */
    findDeepestHtmlNode(vnode) {
      if (!vnode) return null;

      const isHtmlTag = typeof vnode.type === 'string';
      const hasChildren = vnode.children?.length > 0;

      if (isHtmlTag) {
        if (hasChildren) {
          const deepest = this.findDeepestInChildren(vnode.children);
          return deepest || vnode;
        }
        return vnode;
      }

      return hasChildren ? this.findDeepestInChildren(vnode.children) : null;
    },

    /**
     * 在子节点数组中查找最深的 HTML 标签节点
     */
    findDeepestInChildren(children) {
      for (let i = children.length - 1; i >= 0; i--) {
        const deepest = this.findDeepestHtmlNode(children[i]);
        if (deepest) return deepest;
      }
      return null;
    },
  },
};

const vMdParser = new VMdParser();
vMdParser.lang.config = reactive(vMdParser.lang.config);
component.vMdParser = new VMdParser();

export default component;
</script>
