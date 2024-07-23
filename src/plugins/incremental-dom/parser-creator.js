import markdownItIncrementalDom from '@/utils/markdown-it-incremental-dom';

export default function parserCreator(IncrementalDOM) {
  return function parser(vMdParser, options) {
    vMdParser.extendMarkdown((mdParser) => {
      if (IncrementalDOM) {
        mdParser.use(markdownItIncrementalDom, IncrementalDOM, {
          ...options,
        });
      }

      if (!mdParser.IncrementalDOM) {
        mdParser.IncrementalDOM = IncrementalDOM;
      }
    });
  };
}
