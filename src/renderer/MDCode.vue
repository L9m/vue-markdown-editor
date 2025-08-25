
<template>
  <div
    class="v-md-pre-wrapper line-numbers-mode copy-code-mode"
    :class="[`v-md-pre-wrapper-${info}`]"
  >
    <pre><code><slot>{{ text }}</slot></code></pre>

    <div class="highlight-lines">
      <template
        v-for="(isHighlighted, index) in highlightStates"
        :key="index"
      >
        <div
          v-if="isHighlighted"
          class="highlighted"
        >
&nbsp;
        </div>
        <br v-else>
      </template>
    </div>

    <div
      v-if="showLineNumbers"
      class="line-numbers-wrapper"
    >
      <template
        v-for="(i, index) in lineCount"
        :key="index"
      >
        <span class="line-number">{{ index + 1 }}</span>
      </template>
    </div>

    <button
      class="v-md-copy-code-btn"
      type="button"
      @click="copyCode"
    >
      <i>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="copy"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" />
        </svg>
      </i>
    </button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import copyToClipboard from 'copy-to-clipboard';

export default {
  inheritAttrs: false
}
</script>

<script setup>
import { computed } from 'vue'

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
  showLineNumbers: {
    type: Boolean,
    default: true
  }
})

// eslint-disable-next-line no-unused-vars
const lines = computed(() => props.text.split('\n'))

const lineCount = computed(() => lines.value.length - 1) // 匹配原插件：lines.length - 1

const shouldHighlight = computed(() => {
  if (!props.info) return false
  
  const leftDelimiter = '{'
  const rightDelimiter = '}'
  const RE = new RegExp(`${leftDelimiter}([\\d,-]+)${rightDelimiter}`)
  
  return RE.test(props.info)
})

const lineNumbers = computed(() => {
  if (!shouldHighlight.value) return []
  
  const leftDelimiter = '{'
  const rightDelimiter = '}'
  const RE = new RegExp(`${leftDelimiter}([\\d,-]+)${rightDelimiter}`)
  
  const rawInfo = props.info
  const match = RE.exec(rawInfo)
  if (!match) return []
  
  return match[1]
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

const highlightStates = computed(() => {
  return lines.value.map((_, index) => isLineHighlighted(index + 1))
})

const copyCode = () => {
  copyToClipboard(props.text)
}
</script>

<style>
.vuepress-markdown-body div[class*='v-md-pre-wrapper-'] .highlight-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 1.3rem;
  line-height: 1.4;
  -webkit-user-select: none;
  user-select: none;
}
.vuepress-markdown-body
div[class*='v-md-pre-wrapper-'].line-numbers-mode
.highlight-lines
.highlighted {
  position: relative;
}
.vuepress-markdown-body
div[class*='v-md-pre-wrapper-'].line-numbers-mode
.highlight-lines
.highlighted::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: block;
  width: 3.5rem;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.66);
  content: ' ';
}
.vuepress-markdown-body div[class*='v-md-pre-wrapper-'] .highlight-lines .highlighted {
  background-color: rgba(0, 0, 0, 0.66);
}
.github-markdown-body
div[class*='v-md-pre-wrapper-'].line-numbers-mode
.highlight-lines
.highlighted {
  position: relative;
}
.github-markdown-body
div[class*='v-md-pre-wrapper-'].line-numbers-mode
.highlight-lines
.highlighted::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: block;
  width: 3.5rem;
  height: 100%;
  background-color: rgba(208, 213, 221, 0.66);
  content: ' ';
}
.github-markdown-body div[class*='v-md-pre-wrapper-'] .highlight-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 16px;
  font-size: 85%;
  line-height: 1.45;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.github-markdown-body div[class*='v-md-pre-wrapper-'] .highlight-lines .highlighted {
  background-color: rgba(208, 213, 221, 0.66);
}

.v-md-pre-wrapper.copy-code-mode .v-md-copy-code-btn {
  position: absolute;
  top: 0.4em;
  right: 0.4em;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  padding: 0;
  color: #ddd;
  font-size: 14px;
  background-color: #666;
  border: none;
  border-radius: 6px;
  outline: none;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2);
  visibility: hidden;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  user-select: none;
}

.v-md-pre-wrapper.copy-code-mode .v-md-copy-code-btn i {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  pointer-events: none;
}

.v-md-pre-wrapper.copy-code-mode::before {
  transition: 0.3s;
}

.v-md-pre-wrapper.copy-code-mode:hover .v-md-copy-code-btn {
  visibility: visible;
  opacity: 1;
}

.v-md-pre-wrapper.copy-code-mode:hover::before {
  display: none;
}

/* 行号样式 */
.line-numbers-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.5rem;
  padding-top: 16px;
  overflow: hidden;
  color: #999;
  font-size: 85%;
  line-height: 1.704 !important;
  text-align: right;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-number {
  display: block;
  padding: 0 0.5em;
}

</style>