<template>
  <div>
    <div
      v-if="mode === 1"
      class="mathjax g-mathjax"
      v-html="text"
    />
    <div
      v-if="text && mode === 2"
      ref="katexRef"
      class="mathjax g-mathjax"
      v-html="text"
    />
    <div
      v-if="mode === 3"
      class="mathjax g-mathjax"
      v-html="text"
    />
  </div>
</template>

<script>
import katex from 'katex/dist/contrib/auto-render';
import 'katex/dist/katex.min.css';

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    mode: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      katexRef: null,
    };
  },
  watch: {
    text(newVal) {
      if (newVal && this.mode === 2) {
        this.$nextTick(() => {
          this.katexRender();
        });
      }
    },
    mode(newVal) {
      if (newVal === 2 && this.text) {
        this.$nextTick(() => {
          this.katexRender();
        });
      }
    },
  },
  mounted() {
    // Initial render if mode is 2 and text is already set
    if (this.mode === 2 && this.text) {
      this.$nextTick(() => {
        this.katexRender();
      });
    }
  },
  methods: {
    katexRender() {
      katex(this.$refs.katexRef, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\begin{equation}', right: '\\end{equation}', display: true },
          { left: '\\begin{equation*}', right: '\\end{equation*}', display: true },
        ],
        strict: false,
        throwOnError: false,
        errorCodes: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mathjax {
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  font-size: 15px;

  :deep() {
    img {
      max-width: 680rpx; // Note: 'rpx' is not a standard CSS unit and may not work as expected. Consider using 'px', 'em', 'rem', or another valid unit.
      display: inline;
    }
    span,
    p,
    div,
    b,
    i,
    ul,
    li,
    ol,
    strong,
    em,
    link {
      font-family: Microsoft YaHei !important;
    }
    span[wave] {
      text-decoration-style: wavy;
      text-decoration-line: underline;
      text-underline-position: auto;
      white-space: pre-wrap;
    }
  }
}

:global(.MJX-TEX) {
  white-space: normal !important;
  line-height: 6px;
}
</style>
