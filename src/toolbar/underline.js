import { underline } from '@/utils/constants/command';

export default {
  name: underline,
  icon: 'v-new-icon-underline',
  title: (editor) => `${editor.langConfig.underline.toolbar}（Ctrl+D）`,
  action(editor) {
    editor.execCommand(underline);
  },
};
