import parserCreator from './parser-creator';

const isServer = typeof window === 'undefined';
if (!isServer && !window.diffDOM) {
  console.error('Please import resources diffDOM from cdn');
}

export default parserCreator(!isServer && window.diffDOM);
