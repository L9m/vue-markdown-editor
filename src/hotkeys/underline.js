import { underline } from '@/utils/constants/command';

export default {
  modifier: 'ctrl',
  key: 'd',
  action(editor) {
    editor.execCommand(underline);
  },
};
