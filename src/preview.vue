<template>
  <div
    class="v-md-editor-preview"
    :class="[showCursor ? '' : 'hide-cursor']"
    :style="{
      tabSize,
      '-moz-tab-size': tabSize,
      '-o-tab-size': tabSize
    }"
    @click="handlePreviewClick"
  >
    <div
      ref="preview"
      :class="[previewClass, 'qmdr-previewer']"
      v-html="html"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';
// import xss from '@/utils/xss/index';
import { VMdParser } from '@/utils/v-md-parser';
import vDH from 'virtual-dom/h';
import vDDiff from 'virtual-dom/diff';
import vDPatch from 'virtual-dom/patch';
import Logger from '@/utils/logger';
import MyersDiff from '@/utils/myersDiff';

function debounce(func, threshold, immediate) {
  let timeout;
  return function debounced() {
    let obj = this, args = arguments;
    function delayed() {
      if (!immediate)
        func.apply(obj, args);
      timeout = null;
    }

    if (timeout)
      clearTimeout(timeout);
    else if (immediate)
      func.apply(obj, args);

    timeout = setTimeout(delayed, threshold || 100);
  };

}

// mixins
import PreviewMixin from '@/mixins/preview';
import markdownItVirtualDom from './utils/markdown-it-virtual-dom';

const component = {
  name: 'v-md-preview',
  mixins: [PreviewMixin],
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: Object,
    beforeChange: Function,
    debounce: {
      type: Number,
      default: 0,
    },
    showCursor: Boolean,
    isDiffDom: {
      type: Boolean,
      default: true
    },
    isXss: {
      type: Boolean,
      default: true
    },
  },
  emits: ['change'],
  data() {
    return {
      html: '',
    };
  },
  watch: {
    text() {
      this.debouncedHandleTextChange();
    },
    langConfig() {
      this.handleTextChange();
    },
  },
  computed: {
    vMdParser() {
      return this.$options.vMdParser;
    },
    previewClass() {
      return this.vMdParser.themeConfig.previewClass;
    },
    langConfig() {
      return this.vMdParser.lang.config;
    },
  },
  created() {
    this.vMdParser.themeConfig.markdownParser.use(markdownItVirtualDom)
    if (this.debounce) {
      this.debouncedHandleTextChange = debounce(function () {
        this.handleTextChange();
      }, this.debounce);
    } else {
      this.debouncedHandleTextChange = this.handleTextChange;
    }

    this.$nextTick(() => {
      this.handleTextChange();
    });
  },
  methods: {
    handleTextChange() {
      const next = (text) => {

        if (this.showCursor) {
          let tempText = text
          tempText = tempText.replace(' [[qm-private-cursor]]', '')
          text = tempText + ' [[qm-private-cursor]]'
        }

        Logger.time('handleTextChange')
        let html = this.$options.vMdParser.parse(text)
        Logger.time('xss')
        // html = DOMPurify.sanitize(html)
        Logger.timeEnd('xss')
        this.update(html);
        Logger.timeEnd('handleTextChange')

        this.$emit('change', text, html);
      };

      if (this.beforeChange) {
        this.beforeChange(this.text, next);
      } else {
        next(this.text);
      }
    },

    update(html) {
      const tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = html;
      const newHtmlList = this.$getSignData(tmpDiv);
      const oldHtmlList = this.$getSignData(this.$refs.preview);

      try {
        this.$dealUpdate(this.$refs.preview, oldHtmlList, newHtmlList);
      } catch (err) {
        console.error(err)
      }
    },

    $dealUpdate(domContainer, oldHtmlList, newHtmlList) {
      if (newHtmlList.list !== oldHtmlList.list) {
        if (newHtmlList.list.length && oldHtmlList.list.length) {
          const myersDiff = new MyersDiff(newHtmlList.list, oldHtmlList.list, (obj, index) => obj[index].sign);
          const res = myersDiff.doDiff();
          Logger.log(res);
          Logger.time('update')
          this.$dealWithMyersDiffResult(res, oldHtmlList.list, newHtmlList.list, domContainer);
          Logger.timeEnd('update')
        } else if (newHtmlList.list.length && !oldHtmlList.list.length) {
          // 全新增
          Logger.log('add all');
          newHtmlList.list.forEach((piece) => {
            domContainer.appendChild(piece.dom);
          });
        } else if (!newHtmlList.list.length && oldHtmlList.list.length) {
          // 全删除
          Logger.log('delete all');
          oldHtmlList.list.forEach((piece) => {
            domContainer.removeChild(piece.dom);
          });
        }
      }
    },

    $getSignData(dom) {
      const list = dom.querySelectorAll('[data-sign]');
      const ret = { list: [], signs: {} };
      for (let i = 0; i < list.length; i++) {
        if (!this.$testChild(list[i])) {
          continue;
        }
        const sign = list[i].getAttribute('data-sign');
        ret.list.push({ sign, dom: list[i] });
        if (!ret.signs[sign]) {
          ret.signs[sign] = [];
        }
        ret.signs[sign].push(i);
      }
      return ret;
    },

    $testChild(dom) {
      if (!dom.parentNode) {
        return true;
      }
      if (dom.parentNode.classList.contains('qmdr-previewer')) {
        return true;
      }
      if (dom.parentNode.getAttribute('data-sign')) {
        return false;
      }
      return this.$testChild(dom.parentNode);
    },

    $dealWithMyersDiffResult(result, oldContent, newContent, domContainer) {
      result.forEach((change) => {
        switch (change.type) {
          // 删除
          case 'delete':
            domContainer.removeChild(oldContent[change.oldIndex].dom);
            break;
          // 插入
          case 'insert':
            if (oldContent[change.oldIndex]) {
              domContainer.insertBefore(newContent[change.newIndex].dom, oldContent[change.oldIndex].dom);
            } else {
              domContainer.appendChild(newContent[change.newIndex].dom);
            }
            break;
          // 更新
          case 'update':
            try {
              if (newContent[change.newIndex].dom.querySelector('svg')) {
                throw new Error(); // SVG暂不使用patch更新
              }
              this.$updateDom(newContent[change.newIndex].dom, oldContent[change.oldIndex].dom);
            } catch (e) {
              domContainer.insertBefore(newContent[change.newIndex].dom, oldContent[change.oldIndex].dom);
              domContainer.removeChild(oldContent[change.oldIndex].dom);
            }
        }
      });
    },

    $updateDom(newDom, oldDom) {
      // vnode diff
      const diff = vDDiff(this.$html2H(oldDom), this.$html2H(newDom));
      return vDPatch(oldDom, diff);
    },

    $html2H(dom) {
      if (typeof dom === 'undefined') {
        return vDH('span', {}, []);
      }
      if (!dom.tagName) {
        return dom.textContent;
      }
      const { tagName } = dom;

      // skip all children if data-cm-atomic attribute is set
      const isAtomic = 'true' === dom.getAttribute('data-cm-atomic');

      const myAttrs = this.$getAttrsForH(dom.attributes);
      const children = [];
      if (!isAtomic && dom.childNodes && dom.childNodes.length > 0) {
        for (let i = 0; i < dom.childNodes.length; i++) {
          children.push(this.$html2H(dom.childNodes[i]));
        }
      }
      return vDH(tagName, myAttrs, children);
    },
  },
};

const vMdParser = new VMdParser();
vMdParser.lang.config = reactive(vMdParser.lang.config);
component.vMdParser = new VMdParser();

export default component;
</script>

<style lang="scss">
.hide-cursor .qm-chat-cursor {
  display: none !important;
}
</style>