<template>
  <div>
    <button @click="load">加载</button>
    <v-md-editor
      :include-level="[1,2, 3, 4, 5, 6]"
      v-model="text"
      height="500px"
      autofocus
      :debounce="0"
      :disabled-menus="[]"
      toc-nav-position-right
      @upload-image="handleUploadImage"
      @fullscreen-change="handleFullscreenChange"
      @save="handleSave"
      @copy-code-success="handleCopyCodeSuccess"
      ref="editor"
    />
    <!-- <v-md-preview-html
      :html="html"
      preview-class="vuepress-markdown-body"
    /> -->
  </div>
</template>

<script>
import text from './text';
import html from './html';

export default {
  data() {
    return {
      text,
      html,
    };
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
    handleCopyCodeSuccess(code) {
      console.log(code);
    },
    async load() {
      this.text = '';
      let size = 1;
      let start = 0;

      // this.text = '<iframe src="https://markdown.com.cn/basic-syntax/" width="500" height="500"></iframe>'

      async function* processChunk() {
        while (start < text.length) {
          await new Promise((resolve) => setTimeout(resolve, 10));
          this.text += text.substring(start, (start += size));
          yield start;
        }
      }

      for await (const pos of processChunk.call(this)) {
        // console.log('pos', text[pos]);
      }
    },
  },
};
</script>


<style >
.qm-chat-cursor {
  background-image: url(https://media.tenor.com/KwKL5awF9aMAAAAj/minecraft-fox.gif);
  background-size: cover;
  display: inline-block;
  height: 16px;
  margin-left: 4px;
  position: relative;
  top: 1px;
  width: 16px
}
</style>