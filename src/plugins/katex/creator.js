export default function (parser) {
  return function createKatexPlugin(katexOptions = {
    enableBareBlocks: true,
    enableMathBlockInHtml: true,
    enableMathInlineInHtml: true,
  }) {
    return {
      install(VMdEditor) {
        VMdEditor.vMdParser.use(parser, katexOptions);
      },
    };
  };
}
