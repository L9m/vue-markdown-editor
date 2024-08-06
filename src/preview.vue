<template>
  <div class="v-md-editor-preview" :style="{
    tabSize,
    '-moz-tab-size': tabSize,
    '-o-tab-size': tabSize
  }" @click="handlePreviewClick"
  >
    <div :class="[themeConfig.previewClass]" ref="preview" v-html="html" />
  </div>
</template>

<script>
import xss from '@/utils/xss/index';

// mixins
import PreviewMixin from '@/mixins/preview';
import langMixins from '@/mixins/lang';

function debounce (func, threshold, immediate) {
  let timeout;
  return function debounced(...args) {
    const obj = this;
    function delayed () {
      if (!immediate) {
        func.apply(obj, args);
      }
      timeout = null;
    }

    if (timeout) {
      clearTimeout(timeout);
    } else if (immediate) {
      func.apply(obj, args);
    }
    timeout = setTimeout(delayed, threshold || 100);
  };
}

const defaultMarkdownLoader = (text) => text;

const component = {
  name: 'v-md-preview',
  mixins: [langMixins, PreviewMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
    debounce: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      html: '',
    };
  },
  computed: {
    themeConfig() {
      return component.themeConfig || {};
    },
    markdownParser() {
      return this.themeConfig.markdownParser;
    },
    markdownLoader() {
      return this.markdownParser?.render.bind(this.markdownParser) || defaultMarkdownLoader;
    },
  },
  watch: {
    text() {
      this.debouncedHandleTextChange();
    },
    langConfig() {
      this.handleTextChange();
    },
  },
  created() {
    if (this.theme) component.use(this.theme);

    if (
      typeof this.markdownLoader !== 'function' ||
      this.markdownLoader === defaultMarkdownLoader
    ) {
      console.warn('Please configure your markdown parser');
    } else {
      const { markdownExtenders } = component;

      markdownExtenders.forEach((extender) => {
        extender(this.markdownParser, () => this.langConfig);
      });
    }

    if (this.debounce) {
      this.debouncedHandleTextChange = debounce(this.handleTextChange, this.debounce);
    } else {
      this.debouncedHandleTextChange = this.handleTextChange;
    }

    this.handleTextChange();
  },
  methods: {
    handleTextChange() {
      if (this.markdownParser.diffDOM) {
        setTimeout(() => {
          const newElement = document.createElement('div');
          newElement.classList = [this.themeConfig.previewClass];
          newElement.innerHTML = xss.process(this.markdownLoader(this.text));
          const diff = this.markdownParser.diffDOM.diff(this.$refs.preview, newElement);
          this.markdownParser.diffDOM.apply(this.$refs.preview, diff);
        });
      } else {
        this.html = xss.process(this.markdownLoader(this.text));
      }
      this.$emit('change', this.text, this.html);
    },
  },
};

component.theme = function (themeConfig) {
  component.themeConfig = themeConfig;
};

component.markdownExtenders = [];
component.extendMarkdown = function (extend) {
  component.markdownExtenders.push(extend);
};

export default component;
</script>
