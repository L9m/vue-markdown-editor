import parserCreator from './parser-creator';

const isServer = typeof window === 'undefined';
if (!isServer && !window.IncrementalDOM) {
  console.error('Please import resources IncrementalDOM from cdn');
}

export default parserCreator(!isServer && window.IncrementalDOM);
