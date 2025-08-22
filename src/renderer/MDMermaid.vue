<template>
  <div 
    :class="mermaidClasses"
    ref="mermaidRef"
  >
    <!-- Mermaid 图表将渲染到这里 -->
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import mermaid from 'mermaid'

// eslint-disable-next-line no-undef
const props = defineProps({
  content: {
    type: String,
    default: '',
    required: true
  },
  language: {
    type: String,
    default: 'mermaid'
  },
  info: {
    type: String,
    default: ''
  },
  mermaidInitializeOptions: {
    type: Object,
    default: () => ({})
  }
})

const mermaidRef = ref(null)

// Mermaid 默认配置（与插件配置保持一致）
const defaultMermaidConfig = {
  altFontFamily: 'sans-serif',
  flowchart: {
    htmlLabels: true,
    useMaxWidth: true,
  },
  fontFamily: 'sans-serif',
  gantt: {
    leftPadding: 75,
    rightPadding: 20,
  },
  securityLevel: 'loose',
  sequence: {
    boxMargin: 8,
    diagramMarginX: 8,
    diagramMarginY: 8,
    useMaxWidth: true,
  },
  startOnLoad: false,
}

// 计算属性：CSS 类名
// eslint-disable-next-line no-unused-vars
const mermaidClasses = computed(() => {
  return {
    'g-mermaid': true,
    'v-md-mermaid': true, // 保持与原插件一致的类名
    'mermaid': true
  }
})

// 合并配置
const mergedConfig = computed(() => {
  return { ...defaultMermaidConfig, ...props.mermaidInitializeOptions }
})


// 初始化 Mermaid
async function initializeMermaid() {
  try {
    
    // 初始化配置
    mermaid.initialize(mergedConfig.value)
    
    return true
  } catch (error) {
    console.warn('Failed to load mermaid:', error)
    return false
  }
}

// 渲染 Mermaid 图表
async function renderMermaid() {
  if (!props.content || !mermaidRef.value) return
  
  try {
    // 确保 mermaid 已初始化
    const initialized = await initializeMermaid()
    if (!initialized) {
      showError('Mermaid library not available')
      return
    }

    // 清空容器
    mermaidRef.value.innerHTML = ''
    
    // 设置内容
    mermaidRef.value.textContent = props.content
    
    // 验证语法
    let parseSuccess = false
    try {
      parseSuccess = mermaid.parse(props.content)
    } catch (e) {
      if (!e.str) {
        console.log('Mermaid parse error:', e)
      }
      showError(`Mermaid syntax error: ${e.message || 'Invalid syntax'}`)
      return
    }

    // 渲染图表
    if (parseSuccess) {
      await nextTick()
      mermaid.init(null, mermaidRef.value)
    } else {
      showError('Failed to parse mermaid syntax')
    }
    
  } catch (error) {
    console.warn('Mermaid render error:', error)
    showError(`Render error: ${error.message}`)
  }
}

// 显示错误信息
function showError(message) {
  if (mermaidRef.value) {
    mermaidRef.value.innerHTML = `
      <div class="mermaid-error">
        <strong>Mermaid Error:</strong> ${escapeHtml(message)}
      </div>
    `
  }
}

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
  renderMermaid()
}, { immediate: false })

// 监听配置变化
watch(mergedConfig, () => {
  if (mermaid) {
    mermaid.initialize(mergedConfig.value)
    renderMermaid()
  }
})

// 组件挂载后初始化
onMounted(async () => {
  await nextTick()
  renderMermaid()
})
</script>

<style lang="scss" scoped>
.g-mermaid {
  margin: 1em 0;
  text-align: center;
  
  .mermaid-error {
    margin: 8px 0;
    padding: 12px 16px;
    color: #d73a49;
    font-size: 14px;
    text-align: left;
    background-color: #ffeef0;
    border: 1px solid #fdaeb7;
    border-radius: 6px;
    
    strong {
      display: block;
      margin-bottom: 4px;
    }
  }
}

// 深度样式，用于 mermaid 渲染的 SVG
// :deep(.mermaid) {
//   svg {
//     max-width: 100%;
//     height: auto;
//   }
// }

// // 确保与原插件样式兼容
// :deep(.v-md-mermaid) {
//   svg {
//     max-width: 100%;
//     height: auto;
//   }
// }
</style>