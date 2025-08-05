<template>
  <component 
    :is="wrapperTag" 
    :class="mathClasses"
    ref="mathRef"
    v-html="renderedMath"
  />
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const props = defineProps({
  content: {
    type: String,
    default: '',
    required: true
  },
  isBlock: {
    type: Boolean,
    default: false
  },
  markup: {
    type: String,
    default: '$'
  },
  displayMode: {
    type: Boolean,
    default: undefined // 如果未定义，则根据 type 和 isBlock 推断
  }
})

const mathRef = ref(null)

// 计算属性：包装元素标签
const wrapperTag = computed(() => {
  return props.isBlock ? 'div' : 'span'
})

// 计算属性：CSS 类名
const mathClasses = computed(() => {
  return {
    'katex-block': props.isBlock,
    'katex-inline': !props.isBlock,
    'g-mathjax': true,
    'mathjax': true
  }
})

// 计算属性：渲染的数学公式
const renderedMath = computed(() => {
  if (!props.content) {
    return ''
  }

  try {
    return katex.renderToString(props.content, {
      throwOnError: false,
      errorColor: '#cc0000',
      strict: false,
      macros: {
        "\\overparen": "\\overgroup"
      }
    })
  } catch (error) {
    console.warn('KaTeX render error:', error)
    return `<span class="katex-error" title="${escapeHtml(props.content)}">${escapeHtml(props.content)}</span>`
  }
})

// 辅助函数：HTML 转义
function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') {
    return unsafe
  }
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// 监听内容变化
watch(() => props.content, () => {
  // 内容变化时会自动重新计算 renderedMath
}, { immediate: true })
</script>

<style lang="scss" scoped>
.mathjax {
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  font-size: 15px;

  &.katex-block {
    width: 100%;
    display: block;
    margin: 0.5em 0;
    text-align: center;
  }

  &.katex-inline {
    display: inline;
  }

  :deep() {
    img {
      max-width: 680px;
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

.katex-error {
  color: #cc0000;
  border: 1px solid #cc0000;
  padding: 2px 4px;
  border-radius: 3px;
  background-color: #fff5f5;
}
</style>

<style>
.MJX-TEX {
  white-space: normal !important;
  line-height: 1.2;
}
</style>
