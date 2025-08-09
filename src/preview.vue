<template>
  <div
    class="v-md-editor-preview"
    :class="[showCursor ? '': 'hide-cursor']"
    :style="{
      tabSize,
      '-moz-tab-size': tabSize,
      '-o-tab-size': tabSize
    }"
    @click="handlePreviewClick"
  >
    <div
      ref="preview"
      :class="[previewClass]"
    >
      <!-- 使用 VNode 渲染 (diff-dom) -->
      <template v-if="isDiffDom">
        <component
          v-for="vNode in currentVNode"
          :key="vNode.key"
          :is="vNode"
        />
      </template>
      <!-- 使用 HTML 渲染 (传统方式) -->
      <div
        v-else
        v-html="html"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
// import xss from '@/utils/xss/index';
import { VMdParser } from '@/utils/v-md-parser';

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
    showCursor: Boolean,
  },
  emits: ['change'],
  data() {
    return {
      html: '',
      currentVNode: null,
      isRendering: false,
    };
  },
  watch: {
    text() {
      this.parser();
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
    // 自动检测是否启用了 diff-dom 插件
    isDiffDom() {
      // 检查 markdown 渲染器是否被 diff-dom 插件替换
      const markdownParser = this.vMdParser?.themeConfig?.markdownParser;
      if (!markdownParser) return false;
      
      // diff-dom 插件会替换 renderer.render 方法的名称
      const renderFn = markdownParser.renderer?.render;
      return renderFn && renderFn.name === 'render' && !!markdownParser.renderer.renderAttrs;
    },
  },
  created() {
    this.parser();
  },
  methods: {
    handleTextChange() {
      const next = (text) => {
        // if (this.showCursor) {
        //   let tempText = text
        //   tempText = tempText.replace(' [[qm-private-cursor]]', '')
        //   text = tempText + ' [[qm-private-cursor]]'
        // }
        
        const vNode = this.$options.vMdParser.parse(text)
        this.currentVNode = vNode
        this.html = '' // 清空 HTML
        
        this.$emit('change', text, this.html);
      };

      if (this.beforeChange) {
        this.beforeChange(this.text, next);
      } else {
        next(this.text);
      }
    },

    parser() {
      if (this.isRendering) {
        return
      }
      this.isRendering = true;
      requestAnimationFrame(() => {
        const vNode = this.$options.vMdParser.parse(this.text)
        this.currentVNode = vNode
        this.html = ''
        this.$emit('change', this.text, this.html);
        this.isRendering = false;
      });

    }
  },
};

const vMdParser = new VMdParser();
vMdParser.lang.config = reactive(vMdParser.lang.config);
component.vMdParser = new VMdParser();

export default component;
</script>

<style lang="scss">
.hide-cursor .qm-chat-cursor {
  display: none !important;
}
</style>