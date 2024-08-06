import creator from './creator';

const isServer = typeof window === 'undefined';
if (!isServer && !window.diffDOM) {
  console.error('Please import resources diffDOM from cdn');
}

export default creator(!isServer && window.diffDOM);
