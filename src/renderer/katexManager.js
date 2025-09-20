// 管理 KaTeX Worker 的单例模块
const hasWorkerSupport = typeof window !== 'undefined' && 'Worker' in window;
const rootScope = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {};
const cache = new Map(); // 缓存已渲染的 KaTeX 结果
let messageQueue = [];
let isProcessing = false;
let katexWorker = null;
let isListenerAttached = false;
import KatexWorker from './workers/katex-worker.worker.js';

// 默认 KaTeX 配置
const defaultKatexOptions = {
  throwOnError: false,
  errorColor: '#000',
  strict: false,
  macros: {
    '\\overparen': '\\overgroup',
  },
};

// 生成随机 ID
function generateRandomId(length = 6) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
}

// 初始化 Worker
function initializeWorker() {
  if (!hasWorkerSupport || katexWorker) return;
  katexWorker = new KatexWorker();
  rootScope.__katex_worker__ = katexWorker; // 持久化以防 GC
}

function displayKatex(data) {
  if (data && data.result) {
    requestAnimationFrame(() => {
    const placeholderEle = document.querySelector(`#katex-${data.id}`);
    if (placeholderEle) {
      placeholderEle.outerHTML = data.options.displayError && data.error ? data.error : data.result;
    }
    if (messageQueue.length > 0) {
      katexWorker.postMessage(messageQueue.shift());
      isProcessing = true;
    } else {
        isProcessing = false;
      }
    });
  }
  if (data && data.error && data.options.displayError) {
    // eslint-disable-next-line no-console
    console.error(data.error);
  }
}

// 注册 Worker 消息监听器
function attachMessageListener() {
  if (!hasWorkerSupport || isListenerAttached || !katexWorker) return;

  katexWorker.addEventListener('message', (event) => {
    const { id, tex, result, error, options } = event.data || {};

    // 更新缓存
    if (tex && result) {
      cache.set(tex, result);
    }
    displayKatex({ id, result, error, options });

    // 处理队列中的下一个消息
    if (messageQueue.length > 0) {
      katexWorker.postMessage(messageQueue.shift());
      isProcessing = true;
    } else {
      isProcessing = false;
    }
  });

  isListenerAttached = true;
  rootScope.__katex_worker_listener__ = true;
}

// 处理消息队列
function queueMessage(message) {
  if (!hasWorkerSupport || !katexWorker) {
    displayKatex({
      error: 'Web Worker not supported or not initialized',
      options: message.options,
    });
    return;
  }

  if (isProcessing) {
    messageQueue.push(message);
  } else {
    isProcessing = true;
    katexWorker.postMessage(message);
  }
}

// 渲染 KaTeX 字符串（同步或异步）
export function renderKatex(tex, options = {}, katexUrl = '') {
  const mergedOptions = { ...defaultKatexOptions, ...options };

  // 缓存命中
  if (cache.has(tex)) {
    return cache.get(tex);
  }

  // 非 Worker 模式，同步渲染
  if (!hasWorkerSupport || !options.webworker) {
    try {
      const result = window.katex.renderToString(tex, mergedOptions);
      cache.set(tex, result);
      return result;
    } catch (error) {
      const esc = (tex || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const errorHtml = `<span class="katex-error" title="${esc}">${esc}</span>`;
      return options.displayError ? errorHtml : esc;
    }
  }

  // Worker 模式，异步渲染
  initializeWorker();
  attachMessageListener();
  const id = generateRandomId();
  queueMessage({
    id,
    tex,
    options: mergedOptions,
    katexUrl,
  });

  return `<span id="katex-${id}">${tex}</span>`;
}
