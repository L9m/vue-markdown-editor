/* eslint-disable */

export default `

$$a+a=c$$

$a+a=c$


\\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\)

\\[x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\]


111 \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\)11111111111111111111



\\[x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\]


2222 \\[x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\] 4444444


| Syntax      | \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\) |
| ----------- | ----------- |
| \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\) aa \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\)      | aa \\[x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\]bb \\[x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\]      |
| \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\) \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\)   | \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\) \\(x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\)        |


1. 对于$\\sqrt{1+x}$，我们需要确保根号内的表达式非负，即解析原文+x \geq 0$，解得$x \geq -1$。

<h1 align="center">Markdown Editor built on Vue \\[x=\\frac {-b\\pm \\sqrt {{b}^{2}-4ac}} {2a}\\]</h1>


1. 对于$\\sqrt{1+x}$，我们需要确保根号内的表达式非负，即解析原文+x \\geq 0$，解得$x \\geq -1$。


<p align="center">
  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>
</p>

## Links

- [Demo](https://code-farmer-i.github.io/vue-markdown-editor/examples/base-editor.html)
- [Documentation](https://code-farmer-i.github.io/vue-markdown-editor/)
- [Changelog](https://code-farmer-i.github.io/vue-markdown-editor/changelog.html)

## Install

\`\`\`bash
# use npm
npm i @kangc/v-md-editor -S

# use yarn
yarn add @kangc/v-md-editor
\`\`\`

## Quick Start

\`\`\`js
import Vue from 'vue';
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

VueMarkdownEditor.use(vuepressTheme);

Vue.use(VueMarkdownEditor);
\`\`\`

## Usage

\`\`\`html
<template>
  <v-md-editor v-model="text" height="400px"></v-md-editor>
</template>

<script>
  export default {
    data() {
      return {
        text: '',
      };
    },
  };
</script>
\`\`\`

## Refrence

- [ElementUi Scrollbar Component](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)
- [vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)
`;
