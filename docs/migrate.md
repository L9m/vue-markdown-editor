### 迁移指南

此次重构将解析和渲染分离，所有的 markdown 字符串解析后不再直接变成 html, 而是转换为 vnode 渲染
该库也提供默认的渲染组件，实现了插件的原有功能，基本不需要开发，只需要改动配置

1. **流式预览功能**: `VMdPreviewStream`已被移除，需要使用标准预览组件
2. **高亮插件**： `createHighlightLinesPlugin` 已被移除，该功能在默认渲染组件`MDCode`内实现
3. **复制代码插件**： `createCopyCodePlugin` 已被移除，该功能在默认渲染组件`MDCode`内实现
4. **增量更新插件**: `createIncrementalDomPlugin` 已被移除，已被 `createVNodePlugin` 替换
5. **光标插件**: `createCursorPlugin` 已被移除，预览组件`VMdPreview`的 `typing` 和 `showCursor` 属性实现同样的功能

6. **KaTeX 数学公式渲染插件**:
   默认的配置，如果使用默认配置可不传。

   ```js
   {
    enableBareBlocks: true,  // 裸块公式 如 \begin\end
    enableMathBlockInHtml: true, // html 内块级公式$$$$解析
    enableMathInlineInHtml: true, // html 内行内$$公式解析
   }
   ```

   Katex 支持的公式，请参考[]

7. **VMdPreview 配置参考**:

## VMdPreview Props

| 属性名       | 类型     | 默认值                      | 说明                                                           |
| ------------ | -------- | --------------------------- | -------------------------------------------------------------- |
| text         | String   | `''`                        | 需要解析预览的 markdown 字符串                                 |
| beforeChange | Function | -                           | 内容变化前的回调函数                                           |
| typing       | Boolean  | false                       | 是否开启打字机效果，针对哪些整篇文章返回，但还是需要打字效果的 |
| showCursor   | Boolean  | false                       | 是否显示光标（配合打字机效果使用）                             |
| typeOptions  | Object   | `{ step: 1, interval: 16 }` | 打字机效果配置选项                                             |

## VMdPreview Events

| 事件名      | 回调参数 | 说明                 |
| ----------- | -------- | -------------------- |
| typingStart | -        | 打字机效果开始时触发 |
| typing      | -        | 打字机效果进行中触发 |
| typingEnd   | -        | 打字机效果结束时触发 |

配置参考

```js
import VueMarkdownEditor from '@l9m/v-md-editor'; // 编辑组件
import VMdPreview from '@l9m/v-md-editor/lib/preview'; // 预览组件
import githubTheme from '@l9m/v-md-editor/lib/theme/github.js'; // 主题

import createTipPlugin from '@l9m/v-md-editor/lib/plugins/tip/index'; // 提示插件
import createEmojiPlugin from '@l9m/v-md-editor/lib/plugins/emoji/index'; // emoji插件
import createKatexPlugin from '@l9m/v-md-editor/lib/plugins/katex/index'; // katex公式插件
import createTodoListPlugin from '@l9m/v-md-editor/lib/plugins/todo-list/index'; // to-do list插件
import createAlignPlugin from '@l9m/v-md-editor/lib/plugins/align'; // 内容定位
import createVNodePlugin from '@l9m/v-md-editor/lib/plugins/v-node/index'; // vnode 插件

import '@l9m/v-md-editor/lib/style/base-editor.css';
import '@l9m/v-md-editor/lib/theme/style/github.css';
import '@l9m/v-md-editor/lib/style/preview.css';
import '@l9m/v-md-editor/lib/plugins/emoji/emoji.css';
import '@l9m/v-md-editor/lib/plugins/todo-list/todo-list.css';
import '@l9m/v-md-editor/lib/plugins/tip/tip.css';

import MDmath from '@l9m/v-md-editor/lib/renderer/MDmath'; // 公式渲染组件
import MDCode from '@l9m/v-md-editor/lib/renderer/MDCode'; // code 渲染组件
import MDMermaid from '@l9m/v-md-editor/lib/renderer/MDMermaid'; // mermaid 渲染组件

export function registeredVMdEditor(app) {
  const commonPlugins = (editor, type) => {
    editor.use(githubTheme);
    editor.use(createTipPlugin());
    editor.use(createEmojiPlugin());
    editor.use(createKatexPlugin());
    editor.use(createTodoListPlugin());
    editor.use(createAlignPlugin());
    editor.use(
      createVNodePlugin({
        components: {
          math: MDmath, // 这里可以穿自己的渲染组件
          code: MDCode,
          mermaid: MDMermaid,
        },
      })
    );
  };

  commonPlugins(VueMarkdownEditor, 'editor');
  commonPlugins(VMdPreview, 'preview');

  function extendXss(app) {
    app.xss.extend({
      // 扩展白名单
      whiteList: {
        iframe: ['src', 'width', 'height', 'frameborder'],
      },
    });
  }

  extendXss(VMdPreview);

  app.use(VueMarkdownEditor);
  app.use(VMdPreview);
}
```
