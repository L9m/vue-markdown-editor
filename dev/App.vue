<template>
  <div>
    <button @click="load">加载</button>
    <v-md-editor v-model="text" height="500px" :debounce="400" autofocus toc-nav-position-right :disabled-menus="[]"
      @upload-image="handleUploadImage" @fullscreen-change="handleFullscreenChange" @save="handleSave"
      @copy-code-success="handleCopyCodeSuccess" @image-click="handleImageClick" ref="editor" />
  </div>
</template>

<script>
/* eslint-disable */
import text from './text';

export default {
  data() {
    return {
      text,
    };
  },
  methods: {
    handleImageClick(images, currentIndex) {
      console.log(images, currentIndex);
    },
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
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
    async load() {
      this.text = '';
      let start = 0;
      const size = 1;

      async function* processChunk() {
        while (true) {
          if (start >= text.length) break;
          await new Promise((resolve) => setTimeout(resolve, 20));
          this.text += text.substring(start, start += size);
          yield start;
        }
      }


      for await (const pos of processChunk.call(this)) {
        console.log(pos)
      }
    },
  },
};
</script>
