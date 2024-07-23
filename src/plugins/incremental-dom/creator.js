import markdownItIncrementalDom from '@/utils/markdown-it-incremental-dom';

export default function (IncrementalDOM) {
  return function createIncrementalDomPlugin(options) {
    const extendMarkdown = function (mdParser) {
      if (mdParser) {
        mdParser.use(markdownItIncrementalDom, IncrementalDOM, {
          ...options,
        });
      }

      if (!mdParser.IncrementalDOM) {
        mdParser.IncrementalDOM = IncrementalDOM;
      }
    };

    return {
      install(VMdEditor) {
        VMdEditor.extendMarkdown(extendMarkdown);
      },
    };
  };
}
