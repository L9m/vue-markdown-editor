import App from './App';
import { createApp } from 'vue';
import PreviewHtml from '@/preview-html.js';
// import VueMarkdownEditor from '@/base-editor';
import VueMarkdownEditor from '@/codemirror-editor';
// import Preview from '@/preview';
import githubTheme from '@/theme/github/index';

import createEmojiPlugin from '@/plugins/emoji/full';
import '@/plugins/emoji/emoji';
import createKatexPlugin from '@/plugins/katex';
import createTodoListPlugin from '@/plugins/todo-list/index';
import '@/plugins/todo-list/todo-list';
import createLineNumberPlugin from '@/plugins/line-number/index';
// import createCopyCodePlugin from '@/plugins/copy-code/index';
// import '@/plugins/copy-code/copy-code';
// import createHighLinesPlugin from '@/plugins/highlight-lines/';
// import '@/plugins/highlight-lines/highlight-lines';
import createMermaidPlugin from '@/plugins/mermaid/npm';

import createCreateCopyCodePreview from '@/plugins/copy-code/preview';
import createVNodePlugin from '@/plugins/v-node/index';
import createCursorPlugin from '@/plugins/cursor/index';
import createAlignPlugin from '@/plugins/align/index';

// import vuepressTheme from '@/theme/vuepress';
import enUS from '@/lang/en-US';

// import Prism from 'prismjs';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

const app = createApp(App);

PreviewHtml.use(createCreateCopyCodePreview());

VueMarkdownEditor.lang.use('zh-CN', enUS);

VueMarkdownEditor.use(githubTheme, {
  codeHighlightExtensionMap: {
    vue: 'xml',
  },
});
// VueMarkdownEditor.use(vuepressTheme, {
//   Prism,
//   codeHighlightExtensionMap: {
//     vue: 'markup',
//   },
//   toc: {
//     includeLevel: [1, 2, 3, 4, 5, 6],
//   },
// });
// Preview.use(githubTheme);

import GMathVue from '@/components/renderer/math.vue';
import GMermaidVue from '@/components/renderer/mermaid.vue';
import GCode from '@/components/renderer/PreCode.vue';

VueMarkdownEditor.use(createEmojiPlugin())
  .use(
    createKatexPlugin({
      enableMathBlockInHtml: true,
      enableMathInlineInHtml: true,
      enableBareBlocks: true
    })
  )
  .use(createTodoListPlugin())
  .use(createLineNumberPlugin())
  .use(createMermaidPlugin())
  .use(createCursorPlugin())
  .use(createAlignPlugin())
  .use(
    createVNodePlugin({
      components: {
        math: GMathVue,
        mermaid: GMermaidVue,
        code: GCode,
      },
    })
  );

VueMarkdownEditor.Codemirror = Codemirror;

VueMarkdownEditor.xss.extend({
  // 扩展白名单
  whiteList: {
    iframe: ['width', 'height'],
  },
});

app.use(VueMarkdownEditor);
app.use(PreviewHtml);
// app.use(Preview);

app.mount('#app');
