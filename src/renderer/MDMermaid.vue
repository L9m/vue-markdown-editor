<template>
  <div 
    class="g-mermaid v-md-mermaid mermaid"
    ref="mermaidRef"
  />
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'

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

// 合并配置
const mergedConfig = computed(() => {
  return { ...defaultMermaidConfig, ...props.mermaidInitializeOptions }
})

// 渲染 Mermaid 图表
async function renderMermaid() {
  if (!props.content || !mermaidRef.value) return
  
  try {
    if (!window.mermaid) {
      mermaidRef.value.textContent = props.content
      return
    }

    // 初始化配置
    window.mermaid.initialize(mergedConfig.value)
    
    // 完全重置容器
    mermaidRef.value.innerHTML = ''
    mermaidRef.value.removeAttribute('data-processed')
    mermaidRef.value.textContent = props.content
    
    // 验证并渲染
    const parseSuccess = await window.mermaid.parse(props.content)
    if (parseSuccess) {
      await nextTick()
      window.mermaid.init(undefined, mermaidRef.value)
    }
    
  } catch (error) {
    // 报错时显示原始内容
    console.warn('Mermaid render error:', error)
    mermaidRef.value.innerHTML = `<pre>${props.content}</pre>`
  }
}

// 监听内容变化
watch(() => props.content, () => {
  renderMermaid()
})

// 组件挂载后初始化
onMounted(async () => {
  await nextTick()
  renderMermaid()
})
</script>

<style lang="scss">
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


.github-markdown-body pre.v-md-mermaid {
  background-color: unset;
}

.vuepress-markdown-body pre.v-md-mermaid {
  background-color: unset;
}

.vuepress-markdown-body pre.v-md-mermaid code {
  color: #2c3e50;
}
</style>