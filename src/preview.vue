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

function debounce(func, threshold, immediate) {
  let timeout;
  return function debounced() {
    let obj = this, args = arguments;
    function delayed() {
      if (!immediate)
        func.apply(obj, args);
      timeout = null;
    }

    if (timeout)
      clearTimeout(timeout);
    else if (immediate)
      func.apply(obj, args);

    timeout = setTimeout(delayed, threshold || 100);
  };

}

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
    debounce: {
      type: Number,
      default: 0,
    },
    showCursor: Boolean,
  },
  emits: ['change'],
  data() {
    return {
      html: '',
      currentVNode: null
    };
  },
  watch: {
    text() {
      this.debouncedHandleTextChange();
    },
    langConfig() {
      this.handleTextChange();
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
    if (this.debounce) {
      this.debouncedHandleTextChange = debounce(function () {
        this.handleTextChange();
      }, this.debounce);
    } else {
      this.debouncedHandleTextChange = this.handleTextChange;
    }

    this.handleTextChange();
  },
  methods: {
    handleTextChange() {
      const next = (text) => {
        if (this.showCursor) {
          let tempText = text
          tempText = tempText.replace(' [[qm-private-cursor]]', '')
          text = tempText + ' [[qm-private-cursor]]'
        }
        
        if (this.isDiffDom) {
          // 使用 VNode 渲染 (diff-dom)
          const vNode = this.$options.vMdParser.parse(text)
          this.currentVNode = vNode
          this.html = '' // 清空 HTML
        } else {
          // 使用 HTML 渲染 (传统方式)
          const html = this.$options.vMdParser.parse(text)
          this.html = html
          this.currentVNode = null // 清空 VNode
        }
        
        this.$emit('change', text, this.html);
      };

      if (this.beforeChange) {
        this.beforeChange(this.text, next);
      } else {
        next(this.text);
      }
    },
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