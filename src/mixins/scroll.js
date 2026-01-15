export default {
  props: {
    previewScrollContainer: Function,
  },
  computed: {
    getPreviewScrollContainer() {
      return () => {
        const previewScrollContainer = this.$refs.previewScroller.$el.querySelector(
          '.scrollbar__wrap'
        );
        const defaultContainer = this.isPreviewMode ? window : previewScrollContainer;

        return this.previewScrollContainer ? this.previewScrollContainer() : defaultContainer;
      };
    },
  },
  methods: {
    previewScrollTo(scrollTop, onScrollEnd) {
      this.$refs.previewScroller.scrollTo(scrollTop, onScrollEnd);
    },
    scrollToLine(lineIndex) {
      if (!this.isPreviewMode) {
        this.editorScrollToLine(lineIndex);
      }

      if (!this.isEditMode) {
        this.ignoreSyncScroll = true;
        this.previewScrollToLine({
          lineIndex,
          onScrollEnd: () => {
            this.ignoreSyncScroll = false;
          },
        });
      }
    },
    editorScrollToLine(lineIndex) {
      const offsetTop = this.heightAtLine(lineIndex - 1, 'local');

      this.editorScrollToTop(offsetTop);
    },
    previewScrollToTarget(...arg) {
      this.$refs.preview.scrollToTarget(...arg);
    },
    previewScrollToLine({ lineIndex, onScrollEnd }) {
      this.$refs.preview.scrollToLine({ lineIndex, onScrollEnd });
    },
  },
};
