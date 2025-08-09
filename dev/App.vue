<template>
  <div style="height: 100vh;">
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
      height="100vh"
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
      const md = await fetch('./dev/long.md');
      const text = await md.text();
      return text
    },

    async type() {
      this.text = '';
      let size = 1;
      let start = 200;

      this.text = ''
      const fullText = await this.load()

      console.log(fullText.length)

      this.text = fullText.substring(0, start)
      console.time('1')

      async function* processChunk() {
        while (start < fullText.length) {
          await new Promise((resolve) => requestAnimationFrame(resolve));
          
          this.text += fullText.substring(start, (start += size));
          yield start;
        }
      }

      // eslint-disable-next-line no-unused-vars
      for await (const _ of processChunk.call(this)) {
        // console.log('pos', text[pos]);
      }

       console.timeEnd('1')
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