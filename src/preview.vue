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
 * 文本节点迭代器 - 专门用于遍历VNode树中的文本节点
 */
class TextNodeIterator {
  constructor(tree) {
    this.tree = tree;
    this.stack = [];
    this._initializeStack();
  }

  _initializeStack() {
    this.stack.push({ node: this.tree, path: [], index: 0 });
  }

  next() {
    while (this.stack.length > 0) {
      const current = this.stack[this.stack.length - 1];

      if (Array.isArray(current.node)) {
        if (current.index < current.node.length) {
          const child = current.node[current.index];
          const childPath = [...current.path, current.index];
          current.index++;

          this.stack.push({ node: child, path: childPath, index: 0 });
        } else {
          this.stack.pop();
        }
      } else if (current.node && current.node.type === Text) {
        // 找到文本节点
        const result = { done: false, value: current.path };
        this.stack.pop(); // 移除当前节点，为下次调用做准备
        return result;
      } else if (current.node && current.node.children && Array.isArray(current.node.children)) {
        const childrenPath = [...current.path, 'children'];
        this.stack.pop();
        this.stack.push({ node: current.node.children, path: childrenPath, index: 0 });
      } else {
        this.stack.pop();
      }
    }

    return { done: true, value: null };
  }
}

/**
 * VNode文本迭代器 - 字符级别的遍历控制
 */
class VNodeTextIterator {
  constructor(tree, component) {
    this.tree = tree;
    this.component = component;
    this.textNodeIterator = new TextNodeIterator(tree);
    this.currentPath = null;
    this.currentTextIndex = 0;
    this.finished = false;
    this._moveToNextTextNode();
  }

  _moveToNextTextNode() {
    const result = this.textNodeIterator.next();
    if (result.done) {
      this.finished = true;
      return false;
    }

    this.currentPath = result.value;
    this.currentTextIndex = 0;
    return true;
  }

  next(step = 1) {
    if (this.finished) {
      return { done: true };
    }

    // 获取当前文本节点
    let currentNode = this.tree;
    for (const key of this.currentPath) {
      currentNode = currentNode[key];
    }

    if (this.currentTextIndex >= currentNode.children.length) {
      // 当前文本节点已完成，查找下一个
      if (!this._moveToNextTextNode()) {
        return { done: true };
      }
    } else {
      // 在当前文本节点内前进
      this.currentTextIndex = this.component.getNextCharIndex(
        currentNode.children,
        this.currentTextIndex,
        step
      );
    }

    // 更新渲染内容
    this.component.currentVNode = this.component.sliceVNodeTree(
      this.tree,
      this.currentPath,
      this.currentTextIndex
    );

    return {
      done: false,
      value: {
        path: this.currentPath,
        textIndex: this.currentTextIndex,
      },
    };
  }
}

/**
 * 在VNode树的最后一个文本节点后直接插入QMCursor组件
 * 直接修改原树，无需克隆，性能最优
 *

 /**
 * 在最后的文本位置插入Cursor
 */
const insertCursorAfterLastText = (tree) => {
  let lastTextPath = null;
  const pathStack = [];

  // 查找最后一个文本节点的路径
  const findLastTextPath = (node) => {
    if (!node) return;

    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        pathStack.push(i);
        findLastTextPath(node[i]);
        pathStack.pop();
      }
      return;
    }

    if (node.type === Text) {
      lastTextPath = [...pathStack];
    }

    if (node.children && Array.isArray(node.children)) {
      pathStack.push('children');
      findLastTextPath(node.children);
      pathStack.pop();
    }
  };

  // 查找最后文本节点
  findLastTextPath(tree);
  if (!lastTextPath) {
    return tree;
  }

  // 直接插入光标到原树
  const parentPath = lastTextPath.slice(0, -1);
  const textIndex = lastTextPath[lastTextPath.length - 1];

  let parent = tree;
  for (const segment of parentPath) {
    parent = parent[segment];
  }

  if (Array.isArray(parent)) {
    parent.splice(textIndex + 1, 0, h(QMCursor));
  }

  return tree;
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
    cursor: Boolean,
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
      textIterator: null,
    };
  },
  watch: {
    text: {
      immediate: true,
      handler() {
        if (!this.typing) {
          this.parser(this.text);
          return;
        }

        nextTick(() => this.typewriterStart());
      }
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

      if (!this.textIterator) {
        return;
      }

      const result = this.textIterator.next(step);

      if (result.done) {
        this.textIterator = null;
      }

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
                if (this.cursor) {
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
      return slice(tree, []);
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
        if (this.cursor) {
          vNode = insertCursorAfterLastText(vNode);
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
      this.currentVNode = fullVnodeTree;
      this.isTyping = false;
      this.$emit('typingEnd');
    },

    typewriterStart() {
      clearTimeout(this.timer);
      fullVnodeTree = this.$options.vMdParser.parse(this.text);

      // 创建新的迭代器
      this.textIterator = new VNodeTextIterator(fullVnodeTree, this);

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

        if (!this.textIterator) {
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
