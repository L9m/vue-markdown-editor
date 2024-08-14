import markdownItCursor from '@/utils/markdown-it-cursor';

export default function (options) {
  return {
    install(VMdEditor) {
      VMdEditor.extendMarkdown((mdParser) => {
        mdParser.use(markdownItCursor, options);
      });
    },
  };
}
