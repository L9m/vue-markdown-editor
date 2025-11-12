import markdownItContainer from '@/utils/markdown-it-container';

export default function (vMdParser) {
  vMdParser.extendMarkdown((mdParser) => {
    const blockClass = 'v-md-plugin-hlc';
    const getLangConfig = function () {
      const lang = vMdParser.lang.config;
      const langConfig = lang.langConfig[lang.lang];

      return langConfig;
    };

    markdownItContainer(mdParser, {
      type: 'green',
      defaultTitle: () => getLangConfig().hlc.green.defaultTitle,
      blockClass,
    });

    markdownItContainer(mdParser, {
      type: 'orange',
      defaultTitle: () => getLangConfig().hlc.orange.defaultTitle,
      blockClass,
    });

    markdownItContainer(mdParser, {
      type: 'yellow',
      defaultTitle: () => getLangConfig().hlc.yellow.defaultTitle,
      blockClass,
    });

    markdownItContainer(mdParser, {
      type: 'red',
      defaultTitle: () => getLangConfig().hlc.red.defaultTitle,
      blockClass,
    });
  });

  vMdParser.lang.add({
    'zh-CN': {
      hlc: {
        green: {
          defaultTitle: '',
        },
        orange: {
          defaultTitle: '',
        },
        yellow: {
          defaultTitle: '',
        },
        red: {
          defaultTitle: '',
        },
      },
    },
    'en-US': {
      hlc: {
        green: {
          defaultTitle: '',
        },
        orange: {
          defaultTitle: '',
        },
        yellow: {
          defaultTitle: '',
        },
        red: {
          defaultTitle: '',
        },
      },
    },
  });
}
