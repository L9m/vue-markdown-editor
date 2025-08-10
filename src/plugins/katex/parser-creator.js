import markdownItKatex from '@/utils/markdown-it-katex';

export default function parserCreator() {
  return function parser(vMdParser, katexOptions) {
    vMdParser.extendMarkdown((mdParser) => {
      mdParser.use(markdownItKatex, {
        ...katexOptions,
      });
    });
  };
}
