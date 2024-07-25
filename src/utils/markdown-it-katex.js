// Modified from https://github.com/waylonflinn/markdown-it-katex/blob/master/index.js

/* eslint-disable */
function isValidDelim(state, pos) {
  let prevChar;
  let nextChar;
  const max = state.posMax;
  let can_open = true;
  let can_close = true;

  prevChar = pos > 0 ? state.src.charCodeAt(pos - 1) : -1;
  nextChar = pos + 1 <= max ? state.src.charCodeAt(pos + 1) : -1;

  if (
    prevChar === 0x20 /* " " */ ||
    prevChar === 0x09 /* \t */ ||
    (nextChar >= 0x30 /* "0" */ && nextChar <= 0x39) /* "9" */
  ) {
    can_close = false;
  }
  if (nextChar === 0x20 /* " " */ || nextChar === 0x09 /* \t */) {
    can_open = false;
  }

  return {
    can_open,
    can_close,
  };
}

function math_inline(state, silent) {
  let start;
  let match;
  let token;
  let res;
  let pos;
  let esc_count;

  if (state.src[state.pos] !== '$') {
    return false;
  }

  res = isValidDelim(state, state.pos);
  if (!res.can_open) {
    if (!silent) {
      state.pending += '$';
    }
    state.pos += 1;
    return true;
  }

  start = state.pos + 1;
  match = start;
  while ((match = state.src.indexOf('$', match)) !== -1) {
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    if ((match - pos) % 2 == 1) {
      break;
    }
    match += 1;
  }

  if (match === -1) {
    if (!silent) {
      state.pending += '$';
    }
    state.pos = start;
    return true;
  }

  if (match - start === 0) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos = start + 1;
    return true;
  }

  res = isValidDelim(state, match);
  if (!res.can_close) {
    if (!silent) {
      state.pending += '$';
    }
    state.pos = start;
    return true;
  }

  if (!silent) {
    token = state.push('math_inline', 'math', 0);
    token.markup = '$';
    token.content = state.src.slice(start, match);
  }

  state.pos = match + 1;
  return true;
}

function math_block(state, start, end, silent) {
  let firstLine;
  let lastLine;
  let next;
  let lastPos;
  let found = false;
  let token;
  let pos = state.bMarks[start] + state.tShift[start];
  let max = state.eMarks[start];

  if (pos + 2 > max) {
    return false;
  }
  if (state.src.slice(pos, pos + 2) !== '$$') {
    return false;
  }

  pos += 2;
  firstLine = state.src.slice(pos, max);

  if (silent) {
    return true;
  }
  if (firstLine.trim().slice(-2) === '$$') {
    firstLine = firstLine.trim().slice(0, -2);
    found = true;
  }

  for (next = start; !found; ) {
    next++;

    if (next >= end) {
      break;
    }

    pos = state.bMarks[next] + state.tShift[next];
    max = state.eMarks[next];

    if (pos < max && state.tShift[next] < state.blkIndent) {
      break;
    }

    if (state.src.slice(pos, max).trim().slice(-2) === '$$') {
      lastPos = state.src.slice(0, max).lastIndexOf('$$');
      lastLine = state.src.slice(pos, lastPos);
      found = true;
    }
  }

  state.line = next + 1;

  token = state.push('math_block', 'math', 0);
  token.block = true;
  token.content =
    (firstLine && firstLine.trim() ? firstLine + '\n' : '') +
    state.getLines(start + 1, next, state.tShift[start], true) +
    (lastLine && lastLine.trim() ? lastLine : '');
  token.map = [start, state.line];
  token.markup = '$$';
  return true;
}

function math_inline_block(state, silent) {
  var start, match, token, res, pos, esc_count;

  if (state.src.slice(state.pos, state.pos + 2) !== '$$') {
    return false;
  }

  res = isValidDelim(state, state.pos + 1);
  if (!res.can_open) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos += 2;
    return true;
  }

  // First check for and bypass all properly escaped delimieters
  // This loop will assume that the first leading backtick can not
  // be the first character in state.src, which is known since
  // we have found an opening delimieter already.
  start = state.pos + 2;
  match = start;
  while ((match = state.src.indexOf('$$', match)) !== -1) {
    // Found potential $$, look for escapes, pos will point to
    // first non escape when complete
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    // Even number of escapes, potential closing delimiter found
    if ((match - pos) % 2 == 1) {
      break;
    }
    match += 2;
  }

  // No closing delimter found.  Consume $$ and continue.
  if (match === -1) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos = start;
    return true;
  }

  // Check if we have empty content, ie: $$$$.  Do not parse.
  if (match - start === 0) {
    if (!silent) {
      state.pending += '$$$$';
    }
    state.pos = start + 2;
    return true;
  }

  // Check for valid closing delimiter
  res = isValidDelim(state, match + 1);
  if (!res.can_close) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos = start;
    return true;
  }

  if (!silent) {
    token = state.push('math_block', 'math', 0);
    token.block = true;
    token.markup = '$$';
    token.content = state.src.slice(start, match);
  }

  state.pos = match + 2;
  return true;
}

function randomId(length = 4) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result;
}

export default function math_plugin(md, options, katex) {
  options = options || {};
  const renderToString = (function () {
    if (window.Worker && options.useWebWorker) {
      const katexWorker = new Worker(require.resolve("./katex-worker.js"));
      return function (tex, options, ) {
        let id = randomId()
        katexWorker.postMessage({ id, tex, options }, );
    
        katexWorker.onmessage = function (event) {
          const data = event.data;
            if (data.result) {
              const placeholderEle = document.querySelector(`#katex-${data.id}`);
              if (placeholderEle) {
                placeholderEle.outerHTML = data.result
              }
            } else if (data.error) {
              throw new Error(data.error, null);
            }
        };
    
        return `<span id="katex-${id}"></span>`
      }
    } else {
      return katex.renderToString
    }
  })()



  const katexInline = function (latex) {
    options.displayMode = false;
    try {
      return renderToString(latex, options)
    } catch (error) {
      if (options.throwOnError) {
        console.log(error);
      }
      return latex;
    }
  };

  const inlineRenderer = function (tokens, idx) {
    return katexInline(tokens[idx].content);
  };

  const katexBlock = function (latex) {
    options.displayMode = true;
    try {
      const str =  renderToString(latex, options)
      return '<p>' + str + '</p>';
    } catch (error) {
      if (options.throwOnError) {
        console.log(error);
      }
      return latex;
    }
  };

  const blockRenderer = function (tokens, idx) {
    return katexBlock(tokens[idx].content) + '\n';
  };

  md.inline.ruler.after('escape', 'math_inline', math_inline);
  md.inline.ruler.after('escape', 'math_inline_block', math_inline_block);
  md.block.ruler.after('blockquote', 'math_block', math_block, {
    alt: ['paragraph', 'reference', 'blockquote', 'list'],
  });
  md.renderer.rules.math_inline = inlineRenderer;
  md.renderer.rules.math_block = blockRenderer;
  md.renderer.rules.math_inline_block = blockRenderer;
}
