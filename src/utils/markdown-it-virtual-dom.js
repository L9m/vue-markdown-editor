const md5 = require('md5');
const signMarkup = 'data-sign';
// import Logger from './logger';

const signCacheMap = new Map();

export default function (md) {
  const defaultRender = function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };


  function addAttrwrapper(originalRender) {
    return function (tokens, idx, options, env, self) {
      const token = tokens[idx];
      if (token.level === 0) {
        // 暂时只做一级检测
        let content = token.content;
        let sign = '';

        // open tag
        if (token.nesting === 1) {
          const startType = token.type;
          const openRegexp = /(.*)_open/;
          const match = startType?.match(openRegexp);
          const typeName = match?.[1];
          const closeTag = `${typeName}_close`;

          const isContainer = startType?.includes('container') ?? false

          let count = token.nesting;
          let startIndex = idx;
          let endIndex = startIndex;

          while (count !== 0 && endIndex < tokens.length -1) {
            endIndex++;
            const nextToken = tokens[endIndex];
            const nextTokenType = nextToken.type;
            if (nextToken.nesting === -1 && closeTag === nextTokenType) {
                count--;
            // container 可以多个嵌套，但只需一个结束标记就可结束全部，这里需要特殊处理
            } else if (nextTokenType === startType && !isContainer) {
                count++;
            }
          }

          // content 取值还有问题，这里拼接字符串是要保证内容的没变化
          // sign 缓存需要考虑 content 相同，就是匹配文本相同
          content = tokens.slice(startIndex + 1, endIndex).reduce((acc, token) => acc + token.content + JSON.stringify(token.attrs) , '');

          if (signCacheMap.has(content)) {
            sign = signCacheMap.get(content);
          } else {
            sign = md5(JSON.stringify(content));
            signCacheMap.set(content, sign);
          }
        // self close tag
        } else if (token.nesting === -1) {
          sign = md5(String(content));
        }

        token.attrPush([signMarkup, sign]);
      }

      return originalRender(tokens, idx, options, env, self);
    };
  }

  const wrapperMap = {
    blockquote_open: addAttrwrapper,
    bullet_list_open: addAttrwrapper,
    code_block: addAttrwrapper,
    code_inline: addAttrwrapper,
    container_danger_open: addAttrwrapper,
    container_details_open: addAttrwrapper,
    container_tip_open: addAttrwrapper,
    container_warning_open: addAttrwrapper,
    cursor_inline: addAttrwrapper,
    emoji: addAttrwrapper,
    fence: addAttrwrapper,
    hardbreak: addAttrwrapper,
    heading_open: addAttrwrapper,
    hr: addAttrwrapper,
    html_block: addAttrwrapper,
    html_inline: addAttrwrapper,
    image: addAttrwrapper,
    lheading_open: addAttrwrapper,
    link_open: addAttrwrapper,
    math_block: addAttrwrapper,
    math_bracket_block: addAttrwrapper,
    math_bracket_inline: addAttrwrapper,
    math_bracket_inline_block: addAttrwrapper,
    math_inline: addAttrwrapper,
    math_inline_bare_block: addAttrwrapper,
    math_inline_block: addAttrwrapper,
    ordered_list_open: addAttrwrapper,
    paragraph_open: addAttrwrapper,
    reference_open: addAttrwrapper,
    softbreak: addAttrwrapper,
    table_open: addAttrwrapper,
    text: addAttrwrapper,
    toc_open: addAttrwrapper,
  };

  Object.keys(wrapperMap).forEach((ruleName) => {
    const originalRender = md.renderer.rules[ruleName];
    const render = originalRender || defaultRender;

    md.renderer.rules[ruleName] = wrapperMap[ruleName](render);
  });
}
