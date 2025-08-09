import markdownItVNode from '@/utils/markdown-it-vnode';

export default function parserCreator() {
  return function parser(vMdParser, options) {
    vMdParser.extendMarkdown((mdParser) => {
      mdParser.use(markdownItVNode, {
        ...options,
      });
    });
  };
}
