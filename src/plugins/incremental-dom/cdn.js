import creator from './creator';

const isServer = typeof window === 'undefined';
if (!isServer && !window.IncrementalDOM) {
  console.error('Please import resources katex from cdn');
}

export default creator(!isServer && window.IncrementalDOM);
