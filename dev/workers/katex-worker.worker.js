// KaTeX 渲染 Worker 运行文件（classic worker）
// 注意：此文件在 Worker 环境中运行，不能使用 ESM import。KaTeX 通过 importScripts(katexUrl) 动态加载。
/* eslint-env worker */

let katexLoaded = false;
const cacheMap = new Map();
const pendingTexSet = new Set();
const queue = [];
let isProcessing = false;
const MAX_CACHE_ENTRIES = 500;

function safePost(message) {
  try {
    self.postMessage(message);
  } catch (e) {
    // ignore postMessage errors
  }
}

function lruGet(key) {
  if (!cacheMap.has(key)) return undefined;
  const value = cacheMap.get(key);
  cacheMap.delete(key);
  cacheMap.set(key, value);
  return value;
}

function lruSet(key, value) {
  if (cacheMap.has(key)) {
    cacheMap.delete(key);
  } else if (cacheMap.size >= MAX_CACHE_ENTRIES) {
    const firstKey = cacheMap.keys().next().value;
    if (firstKey !== undefined) cacheMap.delete(firstKey);
  }
  cacheMap.set(key, value);
}

function processNextBatch() {
  if (!katexLoaded || isProcessing || queue.length === 0) return;
  isProcessing = true;
  let processed = 0;
  while (queue.length > 0 && processed < 50) {
    const { id, tex, options } = queue.shift();
    pendingTexSet.delete(tex);
    try {
      if (!tex) {
        safePost({ id, result: '', options });
        processed++;
        continue;
      }
      let result = lruGet(tex);
      if (result === undefined) {
        // KaTeX 由 importScripts 加载到 self.katex
        result = self.katex.renderToString(tex, options);
        lruSet(tex, result);
      }
      safePost({ id, result, options });
    } catch (err) {
      safePost({ id, error: String(err), result: tex, options });
    }
    processed++;
  }
  isProcessing = false;
  if (queue.length > 0) {
    setTimeout(processNextBatch, 0);
  }
}

self.onmessage = function (event) {
  const { id, tex, options, katexUrl } = event.data || {};

  if (!katexLoaded) {
    if (!katexUrl) {
      safePost({ id, error: 'KaTeX URL is missing', result: tex, options });
      return;
    }
    try {
      importScripts(katexUrl);
      katexLoaded = true;
    } catch (e) {
      safePost({ id, error: 'Failed to load KaTeX: ' + e, result: tex, options });
      return;
    }
  }

  if (!pendingTexSet.has(tex)) {
    pendingTexSet.add(tex);
    queue.push({ id, tex, options });
  }

  processNextBatch();
};
