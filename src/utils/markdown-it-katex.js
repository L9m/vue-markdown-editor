/* eslint-disable */

/**
 * KaTeX 数学公式解析插件
 * 支持多种数学公式格式：
 * - 行内公式：$formula$
 * - 块级公式：$$formula$$
 * - 括号格式：\(formula\) 和 \[formula\]
 * - 裸块格式：\begin{environment}...\end{environment}
 */

/**
 * 检测潜在的开始或结束分隔符是否有效
 * @param {Object} state - markdown-it 解析状态对象
 * @param {number} pos - 当前位置
 * @returns {Object} 返回包含 can_open 和 can_close 属性的对象
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

/**
 * 检测是否为有效的块级数学公式分隔符（$$）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {number} pos - 当前位置
 * @returns {Object} 返回包含 can_open 和 can_close 属性的对象
 */
function isValidBlockDelim(state, pos) {
  const prevChar = state.src[pos - 1];
  const char = state.src[pos];
  const nextChar = state.src[pos + 1];
  const nextCharPlus1 = state.src[pos + 2];

  // 检测 $$ 格式的块级数学公式分隔符
  // 条件：当前字符是 '$'，前一个字符不是 '$' 或 '\'，后一个字符是 '$'，后第二个字符不是 '$'
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

/**
 * 解析行内数学公式（$...$格式）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {boolean} silent - 是否为静默模式（不生成 token）
 * @returns {boolean} 是否成功解析
 */
function inlineMath(state, silent) {
  // 检查当前位置是否为 '$' 字符
  if (state.src[state.pos] !== '$') {
    return false;
  }

  // 以下代码用于检测是否在 HTML 标签内部（已注释）
  // const lastToken = state.tokens.at(-1);
  // if (lastToken?.type === 'html_inline') {
  //   // 我们可能在行内 HTML 内部
  //   if (/^<\w+.+[^/]>$/.test(lastToken.content)) {
  //     return false;
  //   }
  // }

  // 检查是否为有效的开始分隔符
  let res = isValidInlineDelim(state, state.pos);
  if (!res.can_open) {
    // 如果不能作为开始分隔符，将 '$' 作为普通字符处理
    if (!silent) {
      state.pending += '$';
    }
    state.pos += 1;
    return true;
  }

  // 首先检查和跳过所有正确转义的分隔符
  // 这个循环假设第一个前导 '$' 不可能是 state.src 中的第一个字符
  // 因为我们已经找到了一个开始分隔符
  let start = state.pos + 1;
  let match = start;
  let pos;
  while ((match = state.src.indexOf('$', match)) !== -1) {
    // 找到潜在的 '$'，查找转义字符，pos 将指向完成时的第一个非转义字符
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    // 偶数个转义字符，找到潜在的结束分隔符
    if ((match - pos) % 2 == 1) {
      break;
    }
    match += 1;
  }

  // 未找到结束分隔符。消耗 '$' 并继续。
  if (match === -1) {
    if (!silent) {
      state.pending += '$';
    }
    state.pos = start;
    return true;
  }

  // 检查是否有空内容，即：$$。不进行解析。
  if (match - start === 0) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos = start + 1;
    return true;
  }

  // 检查有效的结束分隔符
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
    token.markup = '$'; // 标记符
    token.content = state.src.slice(start, match); // 公式内容
  }

  // 移动位置到结束分隔符之后
  state.pos = match + 1;
  return true;
}

/**
 * 解析块级数学公式（$$...$$格式）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {number} start - 开始行号
 * @param {number} end - 结束行号
 * @param {boolean} silent - 是否为静默模式
 * @returns {boolean} 是否成功解析
 */
function blockMath(state, start, end, silent) {
  var lastLine, // 最后一行内容
    next, // 下一行索引
    lastPos, // 最后位置
    found = false, // 是否找到结束标记
    token, // 生成的 token
    pos = state.bMarks[start] + state.tShift[start], // 当前行开始位置
    max = state.eMarks[start]; // 当前行结束位置

  // 检查行长度是否足够容纳 '$$'
  if (pos + 2 > max) {
    return false;
  }
  // 检查是否以 '$$' 开始
  if (state.src.slice(pos, pos + 2) !== '$$') {
    return false;
  }

  pos += 2; // 跳过开始的 '$$'
  let firstLine = state.src.slice(pos, max); // 获取第一行剩余内容

  if (silent) {
    return true;
  }

  // 检查是否为单行表达式（在同一行中结束）
  if (firstLine.trim().slice(-2) === '$$') {
    // 单行表达式
    firstLine = firstLine.trim().slice(0, -2);
    found = true;
  } else if (firstLine.trim().indexOf('$$', 2) >= 0) {
    // 如果在同一行中又出现 '$$'，则不解析为块级公式
    return false;
  }

  // 循环查找结束标记
  for (next = start; !found;) {
    next++;

    // 如果超过结束位置，退出循环
    if (next >= end) {
      break;
    }

    pos = state.bMarks[next] + state.tShift[next]; // 下一行开始位置
    max = state.eMarks[next]; // 下一行结束位置

    // 如果是非空行且缩进不足，停止解析
    if (pos < max && state.tShift[next] < state.blkIndent) {
      // 具有负缩进的非空行应停止列表
      break;
    }

    // 检查当前行是否以 '$$' 结束
    if (state.src.slice(pos, max).trim().slice(-2) === '$$') {
      lastPos = state.src.slice(0, max).lastIndexOf('$$'); // 找到最后一个 '$$' 的位置
      lastLine = state.src.slice(pos, lastPos); // 获取结束标记前的内容
      found = true;
    } else if (state.src.slice(pos, max).trim().includes('$$')) {
      lastPos = state.src.slice(0, max).trim().indexOf('$$'); // 找到第一个 '$$' 的位置
      lastLine = state.src.slice(pos, lastPos); // 获取结束标记前的内容
      found = true;
    }
  }

  // 如果未找到结束标记，返回 false
  if (!found) {
    return false;
  }

  state.line = next + 1; // 更新当前解析行

  // 创建数学块 token
  token = state.push('math_block', 'math', 0);
  token.block = true; // 标记为块级元素
  // 组合公式内容：第一行 + 中间行 + 最后一行
  token.content =
    (firstLine && firstLine.trim() ? firstLine + '\n' : '') +
    state.getLines(start + 1, next, state.tShift[start], true) +
    (lastLine && lastLine.trim() ? lastLine : '');
  token.map = [start, state.line]; // 设置源映射
  token.markup = '$$'; // 设置标记符
  return true;
}

/**
 * 解析裸块数学公式（\begin{environment}...\end{environment}格式）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {number} start - 开始行号
 * @param {number} end - 结束行号
 * @param {boolean} silent - 是否为静默模式
 * @returns {boolean} 是否成功解析
 */
function blockBareMath(state, start, end, silent) {
  const startPos = state.bMarks[start] + state.tShift[start]; // 开始位置
  const startMax = state.eMarks[start]; // 结束位置
  const firstLine = state.src.slice(startPos, startMax); // 第一行内容

  // 匹配 \begin{environment} 格式
  const beginMatch = firstLine.match(/^\s*\\begin\s*\{([^{}]+)\}/);
  if (!beginMatch) {
    return false;
  }

  if (start > 0) {
    // 裸块的前一行必须是空行。否则由 inlineBareBlock 处理
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

  const beginEndStack = []; // 用于匹配 \begin 和 \end 的堆栈
  let next = start;
  let lastLine;
  let found = false;

  // 使用标签跳出嵌套循环
  outer: for (; !found; next++) {
    if (next >= end) {
      break;
    }

    const pos = state.bMarks[next] + state.tShift[next]; // 当前行开始位置
    const max = state.eMarks[next]; // 当前行结束位置

    // 具有负缩进的非空行应停止列表
    if (pos < max && state.tShift[next] < state.blkIndent) {
      break;
    }

    const line = state.src.slice(pos, max); // 获取当前行内容
    // 匹配所有 \begin 和 \end 标签
    for (const match of line.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) {
      if (match[1] === '\\begin') {
        beginEndStack.push(match[2].trim()); // 将环境名推入堆栈
      } else if (match[1] === '\\end') {
        beginEndStack.pop(); // 弹出堆栈顶部环境
        if (!beginEndStack.length) {
          // 堆栈为空，说明找到了匹配的结束标签
          lastLine = state.src.slice(pos, max);
          found = true;
          break outer;
        }
      }
    }
  }

  state.line = next + 1; // 更新当前解析行

  // 创建数学块 token
  const token = state.push('math_block', 'math', 0);
  token.block = true; // 标记为块级元素
  // 获取完整的公式内容
  token.content = (
    state.getLines(start, next, state.tShift[start], true) + (lastLine ? lastLine : '')
  ).trim();
  token.map = [start, state.line]; // 设置源映射
  token.markup = '$$'; // 设置标记符
  return true;
}

/**
 * 解析行内数学块（$$...$$在同一行内）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {boolean} silent - 是否为静默模式
 * @returns {boolean} 是否成功解析
 */
function inlineMathBlock(state, silent) {
  var start, match, token, res, pos;

  // 检查是否以 '$$' 开始
  if (state.src.slice(state.pos, state.pos + 2) !== '$$') {
    return false;
  }

  // 检查是否为有效的块级分隔符
  res = isValidBlockDelim(state, state.pos);
  if (!res.can_open) {
    // 如果不能作为开始分隔符，将 '$$' 作为普通字符处理
    if (!silent) {
      state.pending += '$$';
    }
    state.pos += 2;
    return true;
  }

  // 首先检查和跳过所有正确转义的分隔符
  // 这个循环假设第一个前导 '$$' 不可能是 state.src 中的第一个字符
  // 因为我们已经找到了一个开始分隔符
  start = state.pos + 2;
  match = start;
  while ((match = state.src.indexOf('$$', match)) !== -1) {
    // 找到潜在的 '$$'，查找转义字符，pos 将指向完成时的第一个非转义字符
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    // 偶数个转义字符，找到潜在的结束分隔符
    if ((match - pos) % 2 == 1) {
      break;
    }
    match += 2;
  }

  // 未找到结束分隔符。消耗 '$$' 并继续。
  if (match === -1) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos = start;
    return true;
  }

  // 检查是否有空内容，即：$$$$。不进行解析。
  if (match - start === 0) {
    if (!silent) {
      state.pending += '$$$$';
    }
    state.pos = start + 2;
    return true;
  }

  // 检查有效的结束分隔符
  res = isValidBlockDelim(state, match);
  if (!res.can_close) {
    if (!silent) {
      state.pending += '$$';
    }
    state.pos = start;
    return true;
  }

  // 如果不是静默模式，创建数学块 token
  if (!silent) {
    token = state.push('math_block', 'math', 0);
    token.block = true; // 标记为块级元素
    token.markup = '$$'; // 设置标记符
    token.content = state.src.slice(start, match); // 公式内容
  }

  // 移动位置到结束分隔符之后
  state.pos = match + 2;
  return true;
}

/**
 * 解析行内裸块数学公式（\begin{environment}...在行内）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {boolean} silent - 是否为静默模式
 * @returns {boolean} 是否成功解析
 */
function inlineBareBlock(state, silent) {
  const text = state.src.slice(state.pos); // 获取当前位置之后的所有文本

  // 确保这不是一个正常的裸块（必须以换行开始）
  if (!/^\n\\begin/.test(text)) {
    return false;
  }
  state.pos += 1; // 跳过换行符

  if (silent) {
    return true;
  }

  const lines = text.split(/\n/g).slice(1); // 将文本按行分割，跳过第一行（空行）

  let foundLine; // 找到结束标签的行号
  const beginEndStack = []; // 用于匹配 \begin 和 \end 的堆栈

  // 使用标签跳出嵌套循环
  outer: for (var i = 0; i < lines.length; ++i) {
    const line = lines[i];
    // 匹配所有 \begin 和 \end 标签
    for (const match of line.matchAll(/(\\begin|\\end)\s*\{([^{}]+)\}/g)) {
      if (match[1] === '\\begin') {
        beginEndStack.push(match[2].trim()); // 将环境名推入堆栈
      } else if (match[1] === '\\end') {
        beginEndStack.pop(); // 弹出堆栈顶部环境
        if (!beginEndStack.length) {
          // 堆栈为空，说明找到了匹配的结束标签
          foundLine = i;
          break outer;
        }
      }
    }
  }

  // 如果未找到结束标签，返回 false
  if (typeof foundLine === 'undefined') {
    return false;
  }

  // 计算结束位置的索引
  const endIndex = lines.slice(0, foundLine + 1).reduce((p, c) => p + c.length, 0) + foundLine + 1;

  // 创建行内裸块数学 token
  const token = state.push('math_inline_bare_block', 'math', 0);
  token.block = true; // 标记为块级元素
  token.markup = '$$'; // 设置标记符
  token.content = text.slice(1, endIndex); // 公式内容（跳过换行符）
  state.pos = state.pos + endIndex; // 更新位置
  return true;
}

/**
 * 解析行内括号数学公式（\(...\)格式）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {boolean} silent - 是否为静默模式
 * @returns {boolean} 是否成功解析
 */
function inlineBracket(state, silent) {
  var start, match, token, pos;

  // 检查是否以 '\(' 开始
  if (state.src.slice(state.pos, state.pos + 2) !== '\\(') {
    return false;
  }

  start = state.pos + 2;
  match = start;

  while ((match = state.src.indexOf('\\)', match)) !== -1) {
    // 找到潜在的 '\)'，查找转义字符，pos 将指向完成时的第一个非转义字符
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    // 偶数个转义字符，找到潜在的结束分隔符
    if ((match - pos) % 2 == 1) {
      break;
    }

    match += 2;
  }

  // 未找到结束分隔符，将 '\(' 作为普通字符处理
  if (match === -1) {
    if (!silent) {
      state.pending += '\\(';
    }
    state.pos = start;
    return true;
  }

  // 检查是否有空内容，即：\(\)。不进行解析。
  if (match - start === 0) {
    if (!silent) {
      state.pending += '\\(\\)';
    }
    state.pos = start + 2;
    return true;
  }

  // 如果不是静默模式，创建括号行内数学 token
  if (!silent) {
    token = state.push('math_bracket_inline', 'math', 0);
    token.block = true; // 标记为块级元素
    token.markup = '()'; // 设置标记符
    token.content = state.src.slice(start, match); // 公式内容
  }

  // 移动位置到结束分隔符之后
  state.pos = match + 2;
  return true;
}

/**
 * 解析块级括号数学公式（\[...\]格式）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {number} start - 开始行号
 * @param {number} end - 结束行号
 * @param {boolean} silent - 是否为静默模式
 * @returns {boolean} 是否成功解析
 */
function blockBracketMath(state, start, end, silent) {
  var lastLine, // 最后一行内容
    next, // 下一行索引
    lastPos, // 最后位置
    found = false, // 是否找到结束标记
    token, // 生成的 token
    pos = state.bMarks[start] + state.tShift[start], // 当前行开始位置
    max = state.eMarks[start]; // 当前行结束位置

  const startMarkup = '\\['; // 开始标记
  const endMarkup = '\\]'; // 结束标记
  const len = startMarkup.length; // 标记长度

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

  for (next = start; !found;) {
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

  // 创建括号数学块 token
  token = state.push('math_bracket_block', 'math', 0);
  token.block = true; // 标记为块级元素
  // 组合公式内容：第一行 + 中间行 + 最后一行
  token.content =
    (firstLine && firstLine.trim() ? firstLine : '') +
    state.getLines(start + 1, next, state.tShift[start], true) +
    (lastLine && lastLine.trim() ? lastLine : '');

  token.map = [start, state.line]; // 设置源映射
  token.markup = '[]'; // 设置标记符
  return true;
}

/**
 * 解析行内括号数学块（\[...\]在同一行内）
 * @param {Object} state - markdown-it 解析状态对象
 * @param {boolean} silent - 是否为静默模式
 * @returns {boolean} 是否成功解析
 */
function inlineBracketBlock(state, silent) {
  var start, match, token, pos;

  // 检查是否以 '\[' 开始
  if (state.src.slice(state.pos, state.pos + 2) !== '\\[') {
    return false;
  }

  // TODO: 需要判断是否可以作为开始和结束符号

  start = state.pos + 2; // 跳过开始的 '\['
  match = start; // 开始查找结束标记

  while ((match = state.src.indexOf('\\]', match)) !== -1) {
    // 找到潜在的 '\]'，查找转义字符，pos 将指向完成时的第一个非转义字符
    pos = match - 1;
    while (state.src[pos] === '\\') {
      pos -= 1;
    }

    // 偶数个转义字符，找到潜在的结束分隔符
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
      state.pending += '\\[\\]';
    }
    state.pos = start + 2;
    return true;
  }

  // 如果不是静默模式，创建括号行内数学块 token
  if (!silent) {
    token = state.push('math_bracket_inline_block', 'math', 0);
    token.block = true; // 标记为块级元素
    token.markup = '[]'; // 设置标记符
    token.content = state.src.slice(start, match); // 公式内容
  }

  // 移动位置到结束分隔符之后
  state.pos = match + 2;
  return true;
}

/**
 * 处理 HTML 块中的数学公式
 * 对于任何包含数学公式的 HTML 块，将 HTML 块 token 替换为分离 HTML 和数学部分的新 token
 * @param {Object} state - markdown-it 解析状态对象
 * @param {string} mathType - 数学公式类型（'math_block' 或 'math_inline'）
 * @param {string} mathMarkup - 数学公式标记符（'$$' 或 '$'）
 * @param {RegExp} mathRegex - 用于匹配数学公式的正则表达式
 * @returns {boolean} 总是返回 true
 */
function handleMathInHtml(state, mathType, mathMarkup, mathRegex) {
  const tokens = state.tokens; // 获取所有 token

  // 从后向前遍历 token，避免索引变化问题
  for (let index = tokens.length - 1; index >= 0; index--) {
    const currentToken = tokens[index];
    // const newTokens = []; // 备用，用于存储新的 token

    // 只处理 HTML 块 token
    if (currentToken.type !== 'html_block') {
      continue;
    }

    const content = currentToken.content; // 获取 HTML 内容

    // 使用 replace 方法一次性替换所有匹配的数学公式
    let processedContent = content.replace(mathRegex, (match, ...args) => {
      const groups = args[args.length - 1]; // 最后一个参数是 groups 对象（命名捕获组）
      if (!groups) {
        return match; // 如果没有捕获组，返回原匹配内容
      }

      // 提取各部分内容
      const html_before_math = groups.html_before_math || ''; // 数学公式前的 HTML
      const math = groups.math || ''; // 数学公式内容
      const html_after_math = groups.html_after_math || ''; // 数学公式后的 HTML

      // 将数学公式包装为特殊标签
      const commentMath = `<qmmath data-type="${mathType}">${math}</qmmath>`;
      return `${html_before_math}${commentMath}${html_after_math}`;
    });

    currentToken.content = processedContent; // 更新 token 内容
  }
  return true;
}

/**
 * KaTeX 数学公式 markdown-it 插件主函数
 * @param {Object} md - markdown-it 实例
 * @param {Object} options - 插件选项
 * @param {boolean} options.enableBareBlocks - 是否启用裸块支持
 * @param {boolean} options.enableMathBlockInHtml - 是否在 HTML 中启用数学块
 * @param {boolean} options.enableMathInlineInHtml - 是否在 HTML 中启用行内数学
 */
export default function (md, options = {
  enableBareBlocks: true,
  enableMathBlockInHtml: true,
  enableMathInlineInHtml: true,
}) {
  // 提取选项参数
  const enableBareBlocks = options.enableBareBlocks; // 是否启用裸块支持
  const enableMathBlockInHtml = options.enableMathBlockInHtml; // 是否在 HTML 中启用数学块
  const enableMathInlineInHtml = options.enableMathInlineInHtml; // 是否在 HTML 中启用行内数学

  // #region 解析器注册
  // 注册行内解析器
  md.inline.ruler.after('escape', 'math_inline', inlineMath); // 行内数学公式 $...$
  md.inline.ruler.after('escape', 'math_inline_block', inlineMathBlock); // 行内数学块 $$...$$
  md.inline.ruler.after('text', 'math_bracket_inline', inlineBracket); // 行内括号数学 \(...\)
  md.inline.ruler.after('text', 'math_bracket_inline_block', inlineBracketBlock); // 行内括号数学块 \[...\]

  // 如果启用裸块支持，注册行内裸块解析器
  if (enableBareBlocks) {
    md.inline.ruler.before('text', 'math_inline_bare_block', inlineBareBlock);
  }

  // 注册块级数学公式解析器
  md.block.ruler.after(
    'blockquote',
    'math_block',
    (state, start, end, silent) => {
      // 如果启用裸块且能解析为裸块，则优先使用裸块解析器
      if (enableBareBlocks && blockBareMath(state, start, end, silent)) {
        return true;
      }
      // 否则使用标准块级数学公式解析器
      return blockMath(state, start, end, silent);
    },
    {
      alt: ['paragraph', 'reference', 'blockquote', 'list'], // 可替代的解析器
    }
  );

  // 注册块级括号数学公式解析器
  md.block.ruler.after('blockquote', 'math_bracket_block', blockBracketMath, {
    alt: ['paragraph', 'reference', 'blockquote', 'list'], // 可替代的解析器
  });

  // 用于匹配 HTML 中数学块的正则表达式
  // 捕获数学块前的 HTML、数学块（单行或多行）和数学块后的 HTML
  const math_block_within_html_regex = /(?<html_before_math>[\s\S]*?)\$\$(?<math>[\s\S]+?)\$\$(?<html_after_math>(?:(?!\$\$[\s\S]+?\$\$)[\s\S])*)/gm;

  // 用于匹配 HTML 中行内数学的正则表达式
  // 捕获行内数学前的 HTML、行内数学（单行）和行内数学后的 HTML
  const math_inline_within_html_regex = /(?<html_before_math>[\s\S]*?)\$(?<math>.*?)\$(?<html_after_math>(?:(?!\$.*?\$)[\s\S])*)/gm;

  // 如果启用 HTML 中的数学块支持
  if (enableMathBlockInHtml) {
    md.core.ruler.push('math_block_in_html_block', (state) => {
      return handleMathInHtml(state, 'math_block', '$$', math_block_within_html_regex);
    });
  }

  // 如果启用 HTML 中的行内数学支持
  if (enableMathInlineInHtml) {
    md.core.ruler.push('math_inline_in_html_block', (state) => {
      return handleMathInHtml(state, 'math_inline', '$', math_inline_within_html_regex);
    });
  }
  // #endregion 解析器注册
}
