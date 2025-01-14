<template>
  <div class="v-md-editor-preview" :class="[showCursor ? '': 'hide-cursor']" :style="{
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

const defaultMarkdownLoader = (text) => text;

const component = {
  name: 'v-md-preview-stream',
  mixins: [langMixins, PreviewMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
    showCursor: Boolean,
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
      this.handleTextChange();
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

    this.handleTextChange();
  },
  methods: {
    handleTextChange() {
      let { text } = this;
      if (this.showCursor) {
        let tempText = text;
        tempText = tempText.replaceAll(' [[qm-private-cursor]]', '');
        text = tempText + ' [[qm-private-cursor]]';
      }

      if (this.markdownParser.diffDOM) {
        setTimeout(() => {
          if (!this.$refs.preview) return;
          const newElement = document.createElement('div');
          newElement.classList = [this.themeConfig.previewClass];
          newElement.innerHTML = xss.process(this.markdownLoader(text));
          const diff = this.markdownParser.diffDOM.diff(this.$refs.preview, newElement);
          this.markdownParser.diffDOM.apply(this.$refs.preview, diff);
        });
      } else {
        this.html = xss.process(this.markdownLoader(text));
      }
      this.$emit('change', text, this.html);
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


<style lang="scss">
.hide-cursor .qm-chat-cursor {
  display: none !important;
}
</style>
