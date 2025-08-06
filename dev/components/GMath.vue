<template>
  <component 
    :is="wrapperTag" 
    ref="mathRef"
    v-html="renderedMath"
  />
</template>

<script setup>
import { ref, computed, watch} from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const props = defineProps({
  text: {
    type: String,
    default: '',
    required: true
  },
  isBlock: {
    type: Boolean,
    default: false
  },
})

const mathRef = ref(null)

// 计算属性：包装元素标签
const wrapperTag = computed(() => {
  return props.isBlock ? 'div' : 'span'
})


// 计算属性：渲染的数学公式
const renderedMath = computed(() => {
  if (!props.text) {
    return ''
  }

  try {
    return katex.renderToString(props.text, {
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


