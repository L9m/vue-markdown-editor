import { LINE_MARKUP } from '@/utils/constants/markup';

export default {
  data() {
    return {
      enableSyncScroll: true,
      previewScrollTimmer: null,
    };
  },
  methods: {
    toggleSyncScroll(isEnable = !this.enableSyncScroll) {
      this.enableSyncScroll = isEnable;

      if (isEnable) this.previewSyncScroll();
    },
    previewSyncScroll() {
      if (this.isEditMode) return;

      const previewEl = this.$refs.preview.$el;
      const previewScrollerEl = this.$refs.previewScroller.$el;
      const previewLines = previewEl.querySelectorAll(`[${LINE_MARKUP}]`);
      const {
        clientHeight: editorClientHeight,
        top: editorScrollTop,
        height: editorScrollHeight,
      } = this.getScrollInfo();
      const previewScrollWrapper = previewScrollerEl.querySelector('.scrollbar__wrap');

      // 定义滚动完成后的回调
      const onScrollEnd = () => {
        this.ignoreSyncScroll = false;
      };

      if (editorClientHeight + editorScrollTop === editorScrollHeight) {
        const { clientHeight } = previewScrollWrapper;
        const { scrollHeight } = previewScrollWrapper;

        // 设置忽略标志，防止触发预览滚动事件
        this.ignoreSyncScroll = true;
        this.previewScrollTo(scrollHeight - clientHeight, onScrollEnd);
      } else {
        let currentLine;
        let nextLine;

        for (let i = 0; i < previewLines.length; i++) {
          const lineNumber = previewLines[i].getAttribute(LINE_MARKUP);
          const height = this.heightAtLine(lineNumber - 1, 'local');

          if (height < editorScrollTop) {
            currentLine = lineNumber;
          } else {
            nextLine = lineNumber;
            break;
          }
        }

        let percent = 0;

        if (currentLine && nextLine && currentLine !== nextLine) {
          const currentLineTop = this.heightAtLine(currentLine - 1, 'local');
          const nextLineTop = this.heightAtLine(nextLine - 1, 'local');

          percent = (editorScrollTop - currentLineTop) / (nextLineTop - currentLineTop);
        }

        let newLineTop = 0;
        let newNextLineTop = previewScrollWrapper.scrollHeight - previewScrollWrapper.clientHeight;

        if (currentLine) {
          newLineTop = previewEl.querySelector(`[${LINE_MARKUP}="${currentLine}"]`).offsetTop;
        }

        if (nextLine) {
          newNextLineTop = previewEl.querySelector(`[${LINE_MARKUP}="${nextLine}"]`).offsetTop;
        }

        const newScrollTop = newLineTop + (newNextLineTop - newLineTop) * percent;

        // 设置忽略标志，防止触发预览滚动事件
        this.ignoreSyncScroll = true;
        this.previewScrollTo(newScrollTop, onScrollEnd);
      }
    },
    editorSyncScroll() {
      if (this.isEditMode) return;

      const previewEl = this.$refs.preview.$el;
      const previewScrollWrapper = this.$refs.previewScroller.$el.querySelector('.scrollbar__wrap');
      const previewLines = previewEl.querySelectorAll(`[${LINE_MARKUP}]`);
      const previewScrollTop = previewScrollWrapper.scrollTop;
      const previewClientHeight = previewScrollWrapper.clientHeight;
      const previewScrollHeight = previewScrollWrapper.scrollHeight;
      const { height: editorScrollHeight, clientHeight: editorClientHeight } = this.getScrollInfo();

      // 定义滚动完成后的回调
      const onScrollEnd = () => {
        this.ignoreSyncScroll = false;
      };

      // 如果预览滚动到底部，编辑器也滚动到底部
      if (previewClientHeight + previewScrollTop >= previewScrollHeight - 1) {
        // 设置忽略标志，防止触发编辑器滚动事件
        this.ignoreSyncScroll = true;
        this.editorScrollToTop(editorScrollHeight - editorClientHeight, onScrollEnd);
        return;
      }

      // 如果预览滚动到顶部，编辑器也滚动到顶部
      if (previewScrollTop === 0) {
        // 设置忽略标志，防止触发编辑器滚动事件
        this.ignoreSyncScroll = true;
        this.editorScrollToTop(0, onScrollEnd);
        return;
      }

      // 找到预览区域当前滚动位置对应的行号
      let currentLine;
      let nextLine;

      for (let i = 0; i < previewLines.length; i++) {
        const lineElement = previewLines[i];
        const lineTop = lineElement.offsetTop;

        if (lineTop <= previewScrollTop) {
          currentLine = parseInt(lineElement.getAttribute(LINE_MARKUP));
        } else {
          nextLine = parseInt(lineElement.getAttribute(LINE_MARKUP));
          break;
        }
      }

      let percent = 0;

      if (currentLine && nextLine) {
        const currentLineTop = previewEl.querySelector(`[${LINE_MARKUP}="${currentLine}"]`).offsetTop;
        const nextLineTop = previewEl.querySelector(`[${LINE_MARKUP}="${nextLine}"]`).offsetTop;

        percent = (previewScrollTop - currentLineTop) / (nextLineTop - currentLineTop);
      }

      // 计算编辑器应该滚动到的位置
      const editorCurrentLineTop = this.heightAtLine(currentLine - 1, 'local');
      const editorNextLineTop = nextLine ? this.heightAtLine(nextLine - 1, 'local') : editorScrollHeight;

      const newEditorScrollTop = editorCurrentLineTop + (editorNextLineTop - editorCurrentLineTop) * percent;

      // 设置忽略标志，防止触发编辑器滚动事件
      this.ignoreSyncScroll = true;
      this.editorScrollToTop(newEditorScrollTop, onScrollEnd);
    },
    handleEditorScroll() {
      if (!this.enableSyncScroll || this.ignoreSyncScroll) return;

      clearTimeout(this.scrollTimmer);

      this.scrollTimmer = setTimeout(this.previewSyncScroll, 60);
    },
    handlePreviewScroll() {
      if (!this.enableSyncScroll || this.ignoreSyncScroll) return;

      clearTimeout(this.previewScrollTimmer);

      this.previewScrollTimmer = setTimeout(this.editorSyncScroll, 60);
    },
  },
};
