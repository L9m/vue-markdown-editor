import parser from './parser';

export default function (options) {
  return {
    install(VMdEditor) {
      VMdEditor.vMdParser.use(parser, options);
    },
  };
}
