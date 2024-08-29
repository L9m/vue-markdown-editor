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
      v-html="html"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';
import xss from '@/utils/xss/index';
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
    isDiffDom: {
      type: Boolean,
      default: true
    },
    isXss: {
      type: Boolean,
      default: true
    },
  },
  emits: ['change'],
  data() {
    return {
      html: '',
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
          tempText = tempText.replaceAll(' [[qm-private-cursor]]', '')
          text = tempText + ' [[qm-private-cursor]]'
        }

        if (this.vMdParser.themeConfig.markdownParser.diffDOM && this.isDiffDom) {
            setTimeout(() => {
              if (!this.$refs.preview) return
              const newElement = document.createElement('div');
              newElement.classList = [this.previewClass]
              newElement.innerHTML = this.isXss ? xss.process(this.$options.vMdParser.parse(text)) : this.$options.vMdParser.parse(text)
              const diff = this.vMdParser.themeConfig.markdownParser.diffDOM.diff(this.$refs.preview, newElement)
              this.vMdParser.themeConfig.markdownParser.diffDOM.apply(this.$refs.preview, diff)
            });
          } else {
            console.log('this.isXss, this.isDiffDom', this.isXss, this.isDiffDom)
            console.time('update1')
            const html = this.isXss ? xss.process(this.$options.vMdParser.parse(text)) : this.$options.vMdParser.parse(text)

            if (this.$refs.preview) {
              this.$refs.preview.innerHTML = html
            }
            console.timeEnd('update1')
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