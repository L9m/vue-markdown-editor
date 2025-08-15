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
import { reactive, nextTick, h } from 'vue';
import { VMdParser } from '@/utils/v-md-parser';
import QMCursor from '@/components/qm-cursor.vue';


// mixins
import PreviewMixin from '@/mixins/preview';

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
    typeOptions: {
      type: Object,
      default: () => ({
        step: 2,
        interval: 60,
        style: 'cursor',
      }),
    },
  },
  emits: ['change', 'typingStart', 'typing', 'typingEnd'],
  data() {
    return {
      currentVNode: null,
      isRendering: false,
      typingIndex: 0,
      isTyping: false,
    };
  },
  watch: {
    text(newVal, oldVal) {
      if (!this.typing) {
        this.typingIndex = newVal?.length || 0;
        this.parser(this.text);
        return;
      }

      if (newVal.indexOf(oldVal) === -1) {
        this.typingIndex = 0;
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
    parserContent() {
      let content = this.text || '';
      if (this.typing && this.isTyping) {
        content = this.text.slice(0, this.typingIndex) || '';
      }
      this.parser(content);
    },

    parser(content) {
      if (this.isRendering) {
        return;
      }
      this.isRendering = true;
      requestAnimationFrame(() => {
        const next = (text) => {
          const vNode = this.$options.vMdParser.parse(text);

          if (this.typing && this.isTyping && this.typeOptions.style === 'cursor') {
            this.insertCursorToDeepestNode(vNode);
          }

          this.currentVNode = vNode;
          this.isRendering = false;
        };

        if (this.beforeChange) {
          this.beforeChange(content, next);
        } else {
          next(content);
        }
      });
    },
    
    typewriterEnd () {
      this.isTyping = false;
      this.$emit('typingEnd');
    },
    
    typewriterStart() {
      clearTimeout(this.timer);

      this.isTyping = true;
      this.$emit('typingStart');
      const options = { ...this.typeOptions };

      const typingStep = () => {
        let step = options.step;
        if (Array.isArray(options.step)) {
          step = options.step[0] + Math.floor(Math.random() * (options.step[1] - options.step[0]));
        }
        this.typingIndex += step;
        this.parserContent();
        this.$emit('typing');

        if (this.typingIndex >= this.text.length) {
          this.typewriterEnd();
          this.parserContent();
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