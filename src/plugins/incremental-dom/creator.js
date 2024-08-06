import markdownItDiffDom from '@/utils/markdown-it-diff-dom';

export default function (DiffDOM) {
  return function createIncrementalDomPlugin(options) {
    const extendMarkdown = function (mdParser) {
      if (DiffDOM) {
        mdParser.use(markdownItDiffDom, DiffDOM, {
          ...options,
        });
      }
    };

    return {
      install(VMdEditor) {
        VMdEditor.extendMarkdown(extendMarkdown);
      },
    };
  };
}
