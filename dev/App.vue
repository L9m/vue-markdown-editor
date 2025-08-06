<template>
  <div>
    <button @click="load">
      加载
    </button>

    <button @click="type">
      打字
    </button>

    <button @click="full">
      完整
    </button>
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
  </div>
</template>

<script>
import text from './text';
import html from './html';
import GMath from './components/GMath'

export default {
  components: {
    GMath
  },
  data() {
    return {
      text: '',
      html,
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
    handleCopyCodeSuccess(code) {
      console.log(code);
    },

    async load() {
      const md = await fetch('./dev/code.md');
      const text = await md.text();
      return text
    },

    async type() {
      this.text = '';
      let size = 1;
      let start = 0;

      this.text = ''
      const fullText = await this.load()

      async function* processChunk() {
        while (start < fullText.length) {
          await new Promise((resolve) => setTimeout(resolve, 10));
          this.text += fullText.substring(start, (start += size));
          yield start;
        }
      }

      for await (const pos of processChunk.call(this)) {
        // console.log('pos', text[pos]);
      }
    },
  }
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