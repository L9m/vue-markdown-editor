export default function (parser) {
  return function createVNodePlugin(options) {
    return {
      install(VMdEditor) {
        VMdEditor.vMdParser.use(parser, options);
      },
    };
  };
}
