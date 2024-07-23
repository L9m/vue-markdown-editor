import { Parser } from 'htmlparser2';
/* eslint-disable */
export function renderer(incrementalDom) {
  const autoClosingStack = [];

  const autoClosing = () => {
    const stack = autoClosingStack.shift();
    if (!stack) return;

    stack.reverse().forEach((tag) => incrementalDom.elementClose(tag));
  };

  const { attr, elementOpenEnd, elementVoid, text } = incrementalDom;

  const elementOpen = (tag, ...args) => {
    if (autoClosingStack.length > 0) autoClosingStack[0].push(tag);
    incrementalDom.elementOpen(tag, ...args);
  };

  const elementOpenStart = (tag) => {
    if (autoClosingStack.length > 0) autoClosingStack[0].push(tag);
    incrementalDom.elementOpenStart(tag);
  };

  const elementClose = (tag) => {
    if (autoClosingStack.length > 0) autoClosingStack[0].pop();
    incrementalDom.elementClose(tag);
  };

  const sanitizeName = (name) => name.replace(/[^-:\w]/g, '');

  const iDOMParser = new Parser(
    {
      onopentag: (name) => elementOpenEnd(sanitizeName(name)),
      onopentagname: (name) => elementOpenStart(sanitizeName(name)),
      onattribute: (name, value) => {
        const sanitizedName = sanitizeName(name);
        if (sanitizedName !== '') attr(sanitizedName, value);
      },
      ontext: text,
      onclosetag: (name) => elementClose(sanitizeName(name)),
    },
    {
      decodeEntities: true,
      lowerCaseAttributeNames: false,
      lowerCaseTags: false,
    }
  );

  const wrapIncrementalDOM = (html) => {
    typeof html === 'function' ? html() : iDOMParser.write(html);
  };

  return {
    renderAttrsToArray(token) {
      if (!token.attrs) return [];
      return token.attrs.reduce((v, a) => v.concat(a), []);
    },

    renderInline(tokens, options, env) {
      return () => {
        autoClosingStack.unshift([]);
        tokens.forEach((current, i) => {
          const { type } = current;

          if (this.rules[type] !== undefined) {
            this.rules[type](tokens, i, options, env, this);
            wrapIncrementalDOM(this.rules[type](tokens, i, options, env, this));
          } else {
            this.renderToken(tokens, i, options)();
          }
        });
        autoClosing();
      };
    },

    renderToken(tokens, idx) {
      return () => {
        const token = tokens[idx];
        if (token.hidden) return;

        if (token.nesting === -1) {
          elementClose(token.tag);
        } else {
          const func = token.nesting === 0 ? elementVoid : elementOpen;

          func.apply(this, [token.tag, '', []].concat(this.renderAttrsToArray(token)));
        }
      };
    },

    render(tokens, options, env) {
      return () => {
        autoClosingStack.unshift([]);
        tokens.forEach((current, i) => {
          const { type } = current;

          if (type === 'inline') {
            this.renderInline(current.children, options, env)();
          } else if (this.rules[type] !== undefined) {
            wrapIncrementalDOM(this.rules[type](tokens, i, options, env, this));
          } else {
            this.renderToken(tokens, i, options, env)();
          }
        });
        autoClosing();
        iDOMParser.reset();
      };
    },
  };
}

export function rules(incrementalDom) {
  const { elementClose, elementOpen, elementVoid, text } = incrementalDom;

  return {
    code_inline(tokens, idx, options, env, slf) {
      return () => {
        elementOpen.apply(this, ['code', '', []].concat(slf.renderAttrsToArray(tokens[idx])));
        text(tokens[idx].content);
        elementClose('code');
      };
    },

    code_block(tokens, idx, options, env, slf) {
      return () => {
        elementOpen.apply(this, ['pre', '', []].concat(slf.renderAttrsToArray(tokens[idx])));
        elementOpen('code');
        text(tokens[idx].content);
        elementClose('code');
        elementClose('pre');
      };
    },

    hardbreak() {
      return () => elementVoid('br');
    },

    softbreak(tokens, idx, options) {
      return () => (options.breaks ? elementVoid('br') : text('\n'));
    },

    text(tokens, idx) {
      return () => text(tokens[idx].content);
    },
  };
}

export default function incremental_dom_plugin(md, target, opts = {}) {
  const options = { incrementalizeDefaultRules: true, ...opts };
  const incrementalDOM = !target && window ? window.IncrementalDOM : target;
  const mixin = renderer(incrementalDOM);

  if (!md.IncrementalDOMRenderer) {
    Object.defineProperty(md, 'IncrementalDOMRenderer', {
      get() {
        const extended = Object.assign(
          Object.create(Object.getPrototypeOf(md.renderer)),
          md.renderer,
          mixin
        );

        if (options.incrementalizeDefaultRules) {
          extended.rules = { ...extended.rules, ...rules(incrementalDOM) };
        }

        return extended;
      },
    });

    md.renderToIncrementalDOM = (src, env = {}) =>
      md.IncrementalDOMRenderer.render(md.parse(src, env), md.options, env);

    md.renderInlineToIncrementalDOM = (src, env = {}) =>
      md.IncrementalDOMRenderer.render(md.parseInline(src, env), md.options, env);
  }
}
