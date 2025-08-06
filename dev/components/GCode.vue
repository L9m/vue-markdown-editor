<!-- GCode.vue -->
<template>
  <code class="relative">
    <div v-if="shouldHighlight" class="highlight-lines">
      <template v-for="(line, index) in lines" :key="index">
        <div v-if="isLineHighlighted(index + 1)" class="highlighted">&nbsp;</div>
        <br v-else>
      </template>
    </div>
    <slot>{{ text }}</slot>
  </code>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  info: {
    type: String,
    default: ''
  },
  isBlock: {
    type: Boolean,
    default: false
  }
})

const lines = computed(() => {
  return props.text.split('\n')
})

const shouldHighlight = computed(() => {
  console.log(props.info)
  if (!props.info) return false
  
  const leftDelimiter = '{'
  const rightDelimiter = '}'
  const RE = new RegExp(`${leftDelimiter}([\\d,-]+)${rightDelimiter}`)
  console.log(RE.test(props.info))
  
  return RE.test(props.info)
})

const lineNumbers = computed(() => {
  if (!shouldHighlight.value) return []
  
  const leftDelimiter = '{'
  const rightDelimiter = '}'
  const RE = new RegExp(`${leftDelimiter}([\\d,-]+)${rightDelimiter}`)
  
  return RE.exec(props.info)[1]
    .split(',')
    .map((v) => v.split('-').map((v) => parseInt(v, 10)))
})

const isLineHighlighted = (lineNumber) => {
  return lineNumbers.value.some(([start, end]) => {
    if (start && end) {
      return lineNumber >= start && lineNumber <= end
    }
    return lineNumber === start
  })
}
</script>

<style scoped>
.highlighted {
  background-color: rgba(255, 255, 0, 0.2);
  display: block;
  width: 100%;
  height: 1.4em;
}
</style>