/* eslint-disable */

/**
 * Test if potential opening or closing delimiter
 */
function isValidInlineDelim(state, pos) {
  const prevChar = state.src[pos - 1];
  const char = state.src[pos];
  const nextChar = state.src[pos + 1];

  if (char !== '$') {
    return { can_open: false, can_close: false };
  }

  let canOpen = false;
  let canClose = false;
  if (
    prevChar !== '$' &&
    prevChar !== '\\' &&
    (prevChar === undefined || isWhitespace(prevChar) || !isWordCharacterOrNumber(prevChar))
  ) {
    canOpen = true;
  }

  if (
    nextChar !== '$' &&
    (nextChar == undefined || isWhitespace(nextChar) || !isWordCharacterOrNumber(nextChar))
  ) {
    canClose = true;
  }

  return { can_open: canOpen, can_close: canClose };
}

function isWhitespace(char) {
  return /^\s$/u.test(char);
}

function isWordCharacterOrNumber(char) {
  return /^[\w\d]$/u.test(char);
}

function isValidBlockDelim(state, pos) {
  const prevChar = state.src[pos - 1];
  const char = state.src[pos];
  const nextChar = state.src[pos + 1];
  const nextCharPlus1 = state.src[pos + 2];

  if (
    char === '$' &&
    prevChar !== '$' &&
    prevChar !== '\\' &&
    nextChar === '$' &&
    nextCharPlus1 !== '$'
  ) {
    return { can_open: true, can_close: true };
  }

  return { can_open: false, can_close: false };
}

function inlineMath(state, silent) {
  if (state.src[state.pos] !== '$') {
    return false;
  }

  const lastToken = state.tokens.at(-1);

  // if (lastToken?.type === 'html_inline') {
  //   // We may be inside of inside of inline html
  //   if (/^<\w+.+[^/]>$/.test(lastToken.content)) {
  //     return false;
  //   }
  // }

  let res = isValidInlineDelim(state, state.pos);
  if (!res.can_open) {
    if (!silent) {
      state.pending += '$';
    }
    state.pos += 1;
    return true;
  }

  // First check for and bypass all properly escaped delimieters
  // This loop will assume that the first leading backtick can not
  // be the first character in state.src, which is known since
  // we have found an opening delimieter already.
  let start = state.pos + 1;
  let match = start;
  let pos;
  while ((match = state.src.indexOf('$', match)) !== -1) {
    // Found potential $, look for escapes, pos will point to
    // first non escape when complete
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    // Even number of escapes, potential closing delimiter found
    if ((match - pos) % 2 == 1) {
      break;
    }
    match += 1;
  }

  // No closing delimter found.  Consume $ and continue.
  if (match === -1) {
    if (!silent) {
      state.pending += '$';
    }
    state.pos = start;
    return true;
  }

  // Check if we have empty content, ie: $$.  Do not parse.
  if (match - start === 0) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos = start + 1;
    return true;
  }

  // Check for valid closing delimiter
  res = isValidInlineDelim(state, match);
  if (!res.can_close) {
    if (!silent) {
      state.pending += '$';
    }
    state.pos = start;
    return true;
  }

  if (!silent) {
    const token = state.push('math_inline', 'math', 0);
    token.markup = '$';
    token.content = state.src.slice(start, match);
  }

  state.pos = match + 1;
  return true;
}

function blockMath(state, start, end, silent) {
  var lastLine,
    next,
    lastPos,
    found = false,
    token,
    pos = state.bMarks[start] + state.tShift[start],
    max = state.eMarks[start];

  if (pos + 2 > max) {
    return false;
  }
  if (state.src.slice(pos, pos + 2) !== '$$') {
    return false;
  }

  pos += 2;
  let firstLine = state.src.slice(pos, max);

  if (silent) {
    return true;
  }
  if (firstLine.trim().slice(-2) === '$$') {
    // Single line expression
    firstLine = firstLine.trim().slice(0, -2);
    found = true;
  } else if (firstLine.trim().indexOf('$$', 2) >= 0) {
    // inline return false
    return false;
  }

  for (next = start; !found; ) {
    next++;

    if (next >= end) {
      break;
    }

    pos = state.bMarks[next] + state.tShift[next];
    max = state.eMarks[next];

    if (pos < max && state.tShift[next] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      break;
    }

    if (state.src.slice(pos, max).trim().slice(-2) === '$$') {
      lastPos = state.src.slice(0, max).lastIndexOf('$$');
      lastLine = state.src.slice(pos, lastPos);
      found = true;
    } else if (state.src.slice(pos, max).trim().includes('$$')) {
      lastPos = state.src.slice(0, max).trim().indexOf('$$');
      lastLine = state.src.slice(pos, lastPos);
      found = true;
    }
  }

  if (!found) {
    return false;
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

function blockBareMath(state, start, end, silent) {
  const startPos = state.bMarks[start] + state.tShift[start];
  const startMax = state.eMarks[start];
  const firstLine = state.src.slice(startPos, startMax);

  const beginMatch = firstLine.match(/^\s*\\begin\s*\{([^{}]+)\}/);
  if (!beginMatch) {
    return false;
  }

  if (start > 0) {
    // Previous line must be blank for bare blocks. There are instead handled by inlineBareBlock
    const previousStart = state.bMarks[start - 1] + state.tShift[start - 1];
    const previousEnd = state.eMarks[start - 1];
    const previousLine = state.src.slice(previousStart, previousEnd);
    if (!/^\s*$/.test(previousLine)) {
      return false;
    }
  }

  if (silent) {
    return true;
  }

  const beginEndStack = [];
  let next = start;
  let lastLine;
  let found = false;
  outer: for (; !found; next++) {
    if (next >= end) {
      break;
    }

    const pos = state.bMarks[next] + state.tShift[next];
    const max = state.eMarks[next];

    if (pos < max && state.tShift[next] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      break;
    }

    const line = state.src.slice(pos, max);
    for (const match of line.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) {
      if (match[1] === '\\begin') {
        beginEndStack.push(match[2].trim());
      } else if (match[1] === '\\end') {
        beginEndStack.pop();
        if (!beginEndStack.length) {
          lastLine = state.src.slice(pos, max);
          found = true;
          break outer;
        }
      }
    }
  }

  state.line = next + 1;

  const token = state.push('math_block', 'math', 0);
  token.block = true;
  token.content = (
    state.getLines(start, next, state.tShift[start], true) + (lastLine ? lastLine : '')
  ).trim();
  token.map = [start, state.line];
  token.markup = '$$';
  return true;
}

function inlineMathBlock(state, silent) {
  var start, match, token, res, pos;

  if (state.src.slice(state.pos, state.pos + 2) !== '$$') {
    return false;
  }

  res = isValidBlockDelim(state, state.pos);
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
  res = isValidBlockDelim(state, match);
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

function inlineBareBlock(state, silent) {
  const text = state.src.slice(state.pos);

  // Make sure this is not a normal bare block
  if (!/^\n\\begin/.test(text)) {
    return false;
  }
  state.pos += 1;

  if (silent) {
    return true;
  }

  const lines = text.split(/\n/g).slice(1);

  let foundLine;
  const beginEndStack = [];
  outer: for (var i = 0; i < lines.length; ++i) {
    const line = lines[i];
    for (const match of line.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) {
      if (match[1] === '\\begin') {
        beginEndStack.push(match[2].trim());
      } else if (match[1] === '\\end') {
        beginEndStack.pop();
        if (!beginEndStack.length) {
          foundLine = i;
          break outer;
        }
      }
    }
  }

  if (typeof foundLine === 'undefined') {
    return false;
  }

  const endIndex = lines.slice(0, foundLine + 1).reduce((p, c) => p + c.length, 0) + foundLine + 1;

  const token = state.push('math_inline_bare_block', 'math', 0);
  token.block = true;
  token.markup = '$$';
  token.content = text.slice(1, endIndex);
  state.pos = state.pos + endIndex;
  return true;
}

function inlineBracket(state, silent) {
  var start, match, token, pos;

  //@todo 需要判断是否可以作为开始和结束符号 和检测是否在 html 中

  if (state.src.slice(state.pos, state.pos + 2) !== '\\(') {
    return false;
  }

  start = state.pos + 2;
  match = start;

  while ((match = state.src.indexOf('\\)', match)) !== -1) {
    // Found potential $$, look for escapes, pos will point to
    // first non escape when complete
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    if ((match - pos) % 2 == 1) {
      break;
    }

    match += 2;
  }

  if (match === -1) {
    if (!silent) {
      state.pending += '\\(';
    }
    state.pos = start;
    return true;
  }

  if (match - start === 0) {
    if (!silent) {
      state.pending += '\\(\\(';
    }
    state.pos = start + 2;
    return true;
  }

  if (!silent) {
    token = state.push('math_bracket_inline', 'math', 0);
    token.block = true;
    token.markup = '()';
    token.content = state.src.slice(start, match);
  }

  state.pos = match + 2;
  return true;
}

function blockBracketMath(state, start, end, silent) {
  var lastLine,
    next,
    lastPos,
    found = false,
    token,
    pos = state.bMarks[start] + state.tShift[start],
    max = state.eMarks[start];

  const startMarkup = '\\[';
  const endMarkup = '\\]';
  const len = startMarkup.length;

  if (pos + len > max) {
    return false;
  }

  if (state.src.slice(pos, pos + len) !== startMarkup) {
    return false;
  }

  pos += len;

  let firstLine = state.src.slice(pos, max);

  if (silent) {
    return true;
  }

  if (firstLine.trim().slice(-len) === endMarkup) {
    firstLine = firstLine.trim().slice(0, -len);
    found = true;
  } else if (firstLine.trim().indexOf(endMarkup, len) >= 0) {
    // inline return false
    return false;
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

    // 本行有结束标签，闭合
    if (state.src.slice(pos, max).trim().slice(-len) === endMarkup) {
      //找到最后的闭合标签位置
      lastPos = state.src.slice(0, max).lastIndexOf(endMarkup);
      // 取闭合标签位置内容
      lastLine = state.src.slice(pos, lastPos);
      found = true;
    } else if (state.src.slice(pos, max).trim().includes(endMarkup)) {
      lastPos = state.src.slice(0, max).indexOf(endMarkup);
      lastLine = state.src.slice(pos, lastPos);
      found = true;
    }
  }

  if (!found) {
    return false;
  }

  state.line = next + 1;

  token = state.push('math_bracket_block', 'math', 0);
  token.block = true;
  token.content =
    (firstLine && firstLine.trim() ? firstLine : '') +
    state.getLines(start + 1, next, state.tShift[start], true) +
    (lastLine && lastLine.trim() ? lastLine : '');

  token.map = [start, state.line];
  token.markup = '[]';
  return true;
}

function inlineBracketBlock(state, silent) {
  var start, match, token, pos;

  if (state.src.slice(state.pos, state.pos + 2) !== '\\[') {
    return false;
  }

  //@todo 需要判断是否可以作为开始和结束符号

  start = state.pos + 2;
  match = start;

  while ((match = state.src.indexOf('\\]', match)) !== -1) {
    // Found potential $$, look for escapes, pos will point to
    // first non escape when complete
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    if ((match - pos) % 2 == 1) {
      break;
    }

    match += 2;
  }

  if (match === -1) {
    if (!silent) {
      state.pending += '\\[';
    }
    state.pos = start;
    return true;
  }

  if (match - start === 0) {
    if (!silent) {
      state.pending += '\\[\\[';
    }
    state.pos = start + 2;
    return true;
  }

  if (!silent) {
    token = state.push('math_bracket_inline_block', 'math', 0);
    token.block = true;
    token.markup = '[]';
    token.content = state.src.slice(start, match);
  }

  state.pos = match + 2;
  return true;
}

// For any html block that contains math, replace the html block token with new tokens that separate out
// the html blocks from the math
function handleMathInHtml(state, mathType, mathMarkup, mathRegex) {
  const tokens = state.tokens;

  for (let index = tokens.length - 1; index >= 0; index--) {
    const currentToken = tokens[index];
    const newTokens = [];

    if (currentToken.type !== 'html_block') {
      continue;
    }

    const content = currentToken.content;

    // Process for each math referenced within the html block
    for (const match of content.matchAll(mathRegex)) {
      if (!match.groups) {
        continue;
      }

      const html_before_math = match.groups.html_before_math;
      const math = match.groups.math;
      const html_after_math = match.groups.html_after_math;

      let type = mathType === 'math_block' ? 'html_block' : 'html_inline';

      if (html_before_math) {
        newTokens.push({
          ...currentToken,
          type,
          map: null,
          content: html_before_math,
        });
      }

      if (math) {
        newTokens.push({
          ...currentToken,
          type: mathType,
          map: null,
          content: math,
          markup: mathMarkup,
          block: true,
          tag: 'math',
        });
      }

      if (html_after_math) {
        newTokens.push({
          ...currentToken,
          type,
          map: null,
          content: html_after_math,
        });
      }
    }

    // Replace the original html_block token with the newly expanded tokens
    if (newTokens.length > 0) {
      tokens.splice(index, 1, ...newTokens);
    }
  }
  return true;
}

function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') {
    return unsafe;
  }

  if (!unsafe) {
    return '';
  }

  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default function (md, options) {
  const enableBareBlocks = options.enableBareBlocks;
  const enableMathBlockInHtml = options.enableMathBlockInHtml;
  const enableMathInlineInHtml = options.enableMathInlineInHtml;
  const enableFencedBlocks = options.enableFencedBlocks;
  const displayError = options.displayError;
  const useSyncCache = options.useSyncCache;

  // #region Parsing
  md.inline.ruler.after('escape', 'math_inline', inlineMath);
  md.inline.ruler.after('escape', 'math_inline_block', inlineMathBlock);
  md.inline.ruler.after('text', 'math_bracket_inline', inlineBracket);
  md.inline.ruler.after('text', 'math_bracket_inline_block', inlineBracketBlock);
  if (enableBareBlocks) {
    md.inline.ruler.before('text', 'math_inline_bare_block', inlineBareBlock);
  }

  md.block.ruler.after(
    'blockquote',
    'math_block',
    (state, start, end, silent) => {
      if (enableBareBlocks && blockBareMath(state, start, end, silent)) {
        return true;
      }
      return blockMath(state, start, end, silent);
    },
    {
      alt: ['paragraph', 'reference', 'blockquote', 'list'],
    }
  );

  md.block.ruler.after('blockquote', 'math_bracket_block', blockBracketMath, {
    alt: ['paragraph', 'reference', 'blockquote', 'list'],
  });

  // Regex to capture any html prior to math block, the math block (single or multi line), and any html after the math block
  const math_block_within_html_regex = /(?<html_before_math>[\s\S]*?)\$\$(?<math>[\s\S]+?)\$\$(?<html_after_math>(?:(?!\$\$[\s\S]+?\$\$)[\s\S])*)/gm;

  // Regex to capture any html prior to math inline, the math inline (single line), and any html after the math inline
  const math_inline_within_html_regex = /(?<html_before_math>[\s\S]*?)\$(?<math>.*?)\$(?<html_after_math>(?:(?!\$.*?\$)[\s\S])*)/gm;

  if (enableMathBlockInHtml) {
    md.core.ruler.push('math_block_in_html_block', (state) => {
      return handleMathInHtml(state, 'math_block', '$$', math_block_within_html_regex);
    });
  }

  if (enableMathInlineInHtml) {
    md.core.ruler.push('math_inline_in_html_block', (state) => {
      return handleMathInHtml(state, 'math_inline', '$', math_inline_within_html_regex);
    });
  }
  // #endregion

  // #region Rendering

  function randomId(length = 6) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  }

  const renderToString = (function () {
    if (window.Worker && options.useWebWorker) {
      const KatexWorker = `
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
        `;

      const blob = new Blob([KatexWorker], { type: 'application/javascript' });
      const katexWorker = new Worker(URL.createObjectURL(blob));
      const messageQuene = [];
      const cacheMap = Object.create(null);
      let isProcess = false

      function processMessageQueue(message) {
        if (isProcess) {
          messageQuene.push(message);
        } else {
          isProcess = true
          katexWorker.postMessage(message);
        }
      }

      katexWorker.onmessage = function (event) {
        const data = event.data;
          if (data.result) {
            const placeholderEle = document.querySelector(`#katex-${data.id}`);
            if (placeholderEle) {
              placeholderEle.outerHTML = data.result
            }
            if (messageQuene.length > 0) {
              katexWorker.postMessage(messageQuene.shift());
            } else {
              isProcess = false
            }
            if (useSyncCache) {
              cacheMap[data.tex] = data.result
            }
          } else if (data.error) {
            throw new Error(data.error, null);
          }
      };

      return function (tex, options, ) {
        if (useSyncCache) {
          const cache = cacheMap[tex]
          if (cache) {
            return cache
          }
        }

        let id = randomId()
        processMessageQueue({id, tex, options})
        return `<span id="katex-${id}" style="display: none"></span>`
      }
    } else {
      return katex.renderToString
    }
  })()


  const katexInline = (latex) => {
    const displayMode = /\\begin\{(align|equation|gather|cd|alignat)\}/gi.test(latex);
    try {
      return renderToString(latex, { ...options, displayMode });
    } catch (error) {
      if (options.throwOnError) {
        console.log(error);
      }
      return `<span class="katex-error" title="${escapeHtml(latex)}">${
        displayError ? escapeHtml(error + '') : escapeHtml(latex)
      }</span>`;
    }
  };

  const inlineRenderer = (tokens, idx) => {
    return katexInline(tokens[idx].content);
  };

  const katexBlockRenderer = (latex) => {
    try {
      return `<p class="katex-block">${renderToString(latex, {
        ...options,
        displayMode: true,
      })}</p>`;
    } catch (error) {
      if (options.throwOnError) {
        console.log(error);
      }
      return `<p class="katex-block katex-error" title="${escapeHtml(latex)}">${
        displayError ? escapeHtml(error + '') : escapeHtml(latex)
      }</p>`;
    }
  };

  const blockRenderer = (tokens, idx) => {
    return katexBlockRenderer(tokens[idx].content) + '\n';
  };

  md.renderer.rules.math_inline = inlineRenderer;
  md.renderer.rules.math_inline_block = blockRenderer;
  md.renderer.rules.math_inline_bare_block = blockRenderer;
  md.renderer.rules.math_block = blockRenderer;
  md.renderer.rules.math_bracket_block = blockRenderer;
  md.renderer.rules.math_bracket_inline = inlineRenderer;
  md.renderer.rules.math_bracket_inline_block = blockRenderer;

  if (enableFencedBlocks) {
    const mathLanguageId = 'math';

    const originalFenceRenderer = md.renderer.rules.fence;
    md.renderer.rules.fence = function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      if (token.info.trim().toLowerCase() === mathLanguageId && enableFencedBlocks) {
        return katexBlockRenderer(token.content) + '\n';
      } else {
        return originalFenceRenderer.call(this, tokens, idx, options, env, self) || '';
      }
    };
  }

  // #endregion
}