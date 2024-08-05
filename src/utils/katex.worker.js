/* eslint-disable */
importScripts('https://frontend-cdn.qimingdaren.com/cdn/jquery/katex-v2/katex/katex.min.js');

const cacheMap = new Map();

self.onmessage = function(event) {
  try {
    const {id, tex, options} = event.data;
    let result = '';
    if (cacheMap.has(tex)) {
      result = cacheMap.get(tex)
    } else {
      result = katex.renderToString(tex, options);
      cacheMap.set(tex, result)
    }
    self.postMessage({ id, tex, result });
  } catch (error) {
    self.postMessage({ id: event.data.id, tex, error: error.toString() });
  }
  }

self.onerror = function(e) {
    console.log('Worker: Error received from main script');
}