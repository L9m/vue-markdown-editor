export default function (parser) {
  return function createVNodePlugin(options) {
    return {
      install(VMdEditor, installOptions) {
        const finalOptions = {
          ...options,
          ...installOptions,
          xss: installOptions?.xss,
        };
        VMdEditor.vMdParser.use(parser, finalOptions);
      },
    };
  };
}
