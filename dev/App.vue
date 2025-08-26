<template>
  <div>
    <!-- <v-md-editor
      :include-level="[1, 2, 3, 4, 5, 6]"
      v-model="text"
      height="100vh"
      autofocus
      :disabled-menus="[]"
      toc-nav-position-right
      @upload-image="handleUploadImage"
      @fullscreen-change="handleFullscreenChange"
      @save="handleSave"
      ref="editor"
    /> -->
    <v-md-preview
      :text="text"
      :typing="true"
      :show-cursor="true"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
  async mounted() {
    this.text = await this.load();
  },
  methods: {
    handleFullscreenChange(v) {
      console.log(v);
    },
    handleUploadImage(e, insertImage, files) {
      console.log(files);

      insertImage({
        url: '111',
        desc: '111',
      });
    },
    handleSave(v, html) {
      console.log(v, html);
    },

    async load() {
      const md = await fetch('./dev/test1.md');
      const text = await md.text();
      return text;
    },
  },
};
</script>

<style></style>
