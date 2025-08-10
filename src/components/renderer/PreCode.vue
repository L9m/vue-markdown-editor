<!-- GCode.vue -->
<template>
  <component
    :is="wrapperTag"
    v-bind="outerAttrs"
  >
    <code
      class="relative"
    >
      <slot>{{ text }}</slot>
    </code>
  </component>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<script setup>
import { computed, Fragment, useAttrs } from 'vue'

// eslint-disable-next-line no-undef
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

const attrs = useAttrs()

// eslint-disable-next-line no-unused-vars
const lines = computed(() => {
  return props.text.split('\n')
})

// eslint-disable-next-line no-unused-vars
const wrapperTag = computed(() => (props.isBlock ? 'pre' : Fragment))

const outerAttrs = computed(() => (props.isBlock ? attrs : {}))
const innerAttrs = computed(() => (props.isBlock ? {} : attrs))

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

// eslint-disable-next-line no-unused-vars
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
  display: block;
  width: 100%;
  height: 1.4em;
  background-color: rgba(255, 255, 0, 0.2);
}
</style>