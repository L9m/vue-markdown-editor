/* eslint-disable */
export default function incremental_dom_plugin(md, target, opts = {}) {
  const DiffDOM = !target && window ? window.DiffDOM : target;

  if (!md.diffDOM) {
    Object.defineProperty(md, 'diffDOM', {get () {return new DiffDOM(opts)}});
  }
}
