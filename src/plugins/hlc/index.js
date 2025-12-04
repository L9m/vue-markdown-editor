import parser from './parser';

export default function createhlcPlugin({ name = 'hlc', icon = 'v-remix-icon-hlc', text } = {}) {
  const commandHandler = function (editor, type = 'hlc') {
    editor.insert((selected) => {
      const prefix = '\n:::';
      const suffix = ':::\n';
      const content = selected || editor.langConfig.hlc[type].placeholder;

      return {
        text: `${prefix} ${type}\n  ${content}\n${suffix}`,
        selected: content,
      };
    });
  };

  const toolbar = {
    title: (editor) => editor.langConfig.hlc.toolbar,
    icon,
    text,
    menus: [
      {
        name: 'hlc-green',
        text: (editor) => editor.langConfig.hlc.green.toolbar,
        action(editor) {
          editor.execCommand(name, 'green');
        },
      },
      {
        name: 'hlc-orange',
        text: (editor) => editor.langConfig.hlc.orange.toolbar,
        action(editor) {
          editor.execCommand(name, 'orange');
        },
      },
      {
        name: 'hlc-yellow',
        text: (editor) => editor.langConfig.hlc.yellow.toolbar,
        action(editor) {
          editor.execCommand(name, 'yellow');
        },
      },
      {
        name: 'hlc-red',
        text: (editor) => editor.langConfig.hlc.red.toolbar,
        action(editor) {
          editor.execCommand(name, 'red');
        },
      },
      {
        name: 'hlc-tblue',
        text: (editor) => editor.langConfig.hlc.tblue.toolbar,
        action(editor) {
          editor.execCommand(name, 'tblue');
        },
      },
      {
        name: 'hlc-tblue1',
        text: (editor) => editor.langConfig.hlc.tblue1.toolbar,
        action(editor) {
          editor.execCommand(name, 'tblue1');
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
            hlc: {
              toolbar: '插入内容',
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
              'tblue': {
                toolbar: '蓝色一',
                placeholder: '在此输入内容',
              },
              'tblue1': {
                toolbar: '蓝色二',
                placeholder: '在此输入内容',
              },
            },
          },
          'en-US': {
            hlc: {
              toolbar: '插入提示',
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
              'tblue': {
                toolbar: '蓝色一',
                placeholder: '在此输入内容',
              },
              'tblue1': {
                toolbar: '蓝色二',
                placeholder: '在此输入内容',
              },
            },
          },
        });
      }

      VMdEditor.vMdParser.use(parser);
    },
  };
}
