import markdownItDiffDom from '@/utils/markdown-it-diff-dom';

export default function parserCreator() {
  return function parser(vMdParser, options) {
    vMdParser.extendMarkdown((mdParser) => {
        mdParser.use(markdownItDiffDom, {
          ...options,
        });
    });
  };
}
