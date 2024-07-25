/* eslint-disable */
importScripts('https://frontend-cdn.qimingdaren.com/cdn/jquery/katex.min.js');

self.onmessage = function(event) {
  try {
    const {id, tex, options} = event.data;
    const result = katex.renderToString(tex, options);
    self.postMessage({ id, result });
  } catch (error) {
    self.postMessage({ id: event.data.id, error: error.toString() });
  }
  }

self.onerror = function(e) {
    console.log('Worker: Error received from main script');
}