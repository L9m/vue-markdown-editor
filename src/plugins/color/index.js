export default function createcolorPlugin({ name = 'color', icon = 'v-remix-icon-color', text } = {}) {
  const commandHandler = function (editor, type = '0EA98A') {
    editor.insert((selected) => {
      const prefix = `<span style="color:${type}">`;
      const suffix = `</span>`;
      const content = selected || editor.langConfig.color[type].placeholder;

      return {
        text: `${prefix}${content}${suffix}`,
        selected: content,
      };
    });
  };

  const toolbar = {
    title: (editor) => editor.langConfig.color.toolbar,
    icon,
    text,
    menus: [
      {
        name: 'color-green',
        text: (editor) => editor.langConfig.color.green.toolbar,
        action(editor) {
          editor.execCommand(name, '#0EA98A');
        },
      },
      {
        name: 'color-orange',
        text: (editor) => editor.langConfig.color.orange.toolbar,
        action(editor) {
          editor.execCommand(name, '#D25F00');
        },
      },
      {
        name: 'color-yellow',
        text: (editor) => editor.langConfig.color.yellow.toolbar,
        action(editor) {
          editor.execCommand(name, '#CC9213');
        },
      },
      {
        name: 'color-red',
        text: (editor) => editor.langConfig.color.red.toolbar,
        action(editor) {
          editor.execCommand(name, '#CB2634');
        },
      },
    ],
  };

  return {
    install(VMdEditor) {
      if (VMdEditor.name === 'v-md-editor') {
        VMdEditor.command(name, commandHandler);
        VMdEditor.toolbar(name, toolbar);
        VMdEditor.lang.add({
          'zh-CN': {
            color: {
              toolbar: '插入颜色',
              green: {
                toolbar: '绿色',
                placeholder: '在此输入内容',
              },
              orange: {
                toolbar: '橙色',
                placeholder: '在此输入内容',
              },
              yellow: {
                toolbar: '黄色',
                placeholder: '在此输入内容',
              },
              red: {
                toolbar: '红色',
                placeholder: '在此输入内容',
              },
            },
          },
          'en-US': {
            color: {
              toolbar: '插入颜色',
              green: {
                toolbar: '绿色',
                placeholder: '在此输入内容',
              },
              orange: {
                toolbar: '橙色',
                placeholder: '在此输入内容',
              },
              yellow: {
                toolbar: '黄色',
                placeholder: '在此输入内容',
              },
              red: {
                toolbar: '红色',
                placeholder: '在此输入内容',
              },
            },
          },
        });
      }
    },
  };
}
