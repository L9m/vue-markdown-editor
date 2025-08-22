<template>
  <component
    :is="wrapperTag"
    ref="mathRef"
    v-html="renderedMath"
  />
</template>

<script setup>
/* eslint-env vue/setup-compiler-macros */
/* global defineProps */
import { ref, computed } from 'vue';
import {renderKatex} from './katexManager'

const props = defineProps({
  text: {
    type: String,
    default: '',
    required: true,
  },
  // 如果使用 webworker 模式，需要传入 katexUrl
  katexUrl: {
    type: String,
    default: 'https://frontend-cdn.qimingdaren.com/cdn/jquery/katex-v3/katex.min.js',
  },
  isBlock: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    default: () => ({
      webworker: true,
      throwOnError: false,
      macros: {
        "\\overparen": "\\overgroup"
      }
    }),
  },
});

// 在模板中使用，但 ESLint 可能无法静态识别
/* eslint-disable-next-line no-unused-vars */
const mathRef = ref(null);

// 包装元素标签（在模板中使用，但 ESLint 可能无法静态识别）
// eslint-disable-next-line no-unused-vars
const wrapperTag = computed(() => (props.isBlock ? 'div' : 'span'));

function renderToString(tex, options) {
  const displayMode = /\\begin\{(align|equation|gather|cd|alignat)\}/gi.test(tex);
  const str = renderKatex(tex, { ...options, displayMode }, props.katexUrl)
  return str
}

// 渲染后的 HTML（computed）
/* eslint-disable-next-line no-unused-vars */
const renderedMath = computed(() => renderToString(props.text, props.options));
</script>
