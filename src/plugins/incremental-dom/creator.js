export default function (parser) {
  return function createIncrementalDomPlugin(options) {
    return {
      install(VMdEditor) {
        VMdEditor.vMdParser.use(parser, options);
      },
    };
  };
}
