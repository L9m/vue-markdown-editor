import markdownItDiffDom from '@/utils/markdown-it-diff-dom';

export default function parserCreator(DiffDOM) {
  return function parser(vMdParser, options) {
    vMdParser.extendMarkdown((mdParser) => {
      if (DiffDOM) {
        mdParser.use(markdownItDiffDom, DiffDOM, {
          ...options,
        });
      }
    });
  };
}
