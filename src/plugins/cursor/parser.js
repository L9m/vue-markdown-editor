import markdownItCursor from '@/utils/markdown-it-cursor';

export default function (vMdParser) {
  vMdParser.extendMarkdown((mdParser, options) => {
    mdParser.use(markdownItCursor, {
      ...options
    });
  });
}
