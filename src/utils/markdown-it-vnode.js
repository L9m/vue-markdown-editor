import { createVNode, Fragment, Text } from 'vue';
import { escapeHtml, unescapeAll } from 'markdown-it/lib/common/utils';
import { LINE_MARKUP } from './constants/markup';

const attrNameReg = /^[a-zA-Z_:][a-zA-Z0-9:._-]*$/;
const attrEventReg = /^on/i;

// 预编译正则表达式，提高性能
const OPEN_TAG_REGEX = /^<\s*[a-zA-Z][^>]*>$/;
const CLOSE_TAG_REGEX = /^<\s*\/\s*[a-zA-Z][^>]*>$/;
const TAG_NAME_REGEX = /^<\s*\/?([a-zA-Z][^\s>]*)/;
// 匹配属性：支持 attr="value"、attr='value'、attr=value 和 单独的 attr
const ATTR_REGEX = /([a-zA-Z_:][a-zA-Z0-9:._-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;

// HTML自闭合标签（void elements）
const VOID_ELEMENTS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

const defaultRules = {};

export default function (
  md,
  config = {
    components: {},
  }
) {
  config = Object.assign(
    {
      lineNumbers: true,
      lineMarkup: LINE_MARKUP,
      xss: null, // XSS 过滤器实例
    },
    config
  );

  function validateAttrName(name) {
    return attrNameReg.test(name) && !attrEventReg.test(name);
  }

  // HTML标签转换相关函数
  function isOpenTag(content) {
    // 匹配开始标签，排除结束标签和自闭合标签
    if (!OPEN_TAG_REGEX.test(content) || content.includes('</') || content.endsWith('/>')) {
      return false;
    }

    // 排除HTML自闭合标签（void elements）
    const tagName = getTagName(content);
    return tagName && !VOID_ELEMENTS.has(tagName);
  }

  function isCloseTag(content) {
    return CLOSE_TAG_REGEX.test(content);
  }

  function isVoidElement(content) {
    // 检查是否为void element（自闭合标签）
    if (!OPEN_TAG_REGEX.test(content) || content.includes('</')) {
      return false;
    }

    const tagName = getTagName(content);
    return tagName && VOID_ELEMENTS.has(tagName);
  }

  function getTagName(content) {
    const match = content.match(TAG_NAME_REGEX);
    return match ? match[1].toLowerCase() : null;
  }

  // 解析HTML标签的属性
  function parseHtmlAttrs(content) {
    const attrs = [];
    // 重置正则表达式的lastIndex，确保每次都从头开始匹配
    ATTR_REGEX.lastIndex = 0;
    let match;

    while ((match = ATTR_REGEX.exec(content)) !== null) {
      const attrName = match[1];
      // match[2], match[3], match[4] 分别对应双引号、单引号、无引号的值
      const attrValue = match[2] || match[3] || match[4];

      if (attrValue !== undefined) {
        // 有值的属性：attr="value" 或 attr=value
        attrs.push([attrName, attrValue]);
      } else {
        // 布尔属性：disabled, selected, hidden 等
        attrs.push([attrName, attrName]); // HTML标准中布尔属性的值通常等于属性名
      }
    }

    return attrs.length > 0 ? attrs : null;
  }

  function transformHtmlInlineTokens(tokens) {
    const stack = [];

    return tokens.map((token) => {
      if (token.type !== 'html_inline') {
        return token;
      }

      const content = token.content;

      if (isVoidElement(content)) {
        // 处理自闭合标签（void elements）
        const tagName = getTagName(content);
        const attrs = parseHtmlAttrs(content);
        return {
          ...token,
          type: 'html_void',
          tag: tagName,
          nesting: 0, // 自闭合标签不需要nesting
          attrs: attrs,
        };
      }

      if (isOpenTag(content)) {
        const tagName = getTagName(content);
        const attrs = parseHtmlAttrs(content); // 解析属性
        stack.push(tagName);
        return {
          ...token, // 保留原始token的所有属性
          type: 'html_inline_open',
          tag: tagName,
          nesting: 1,
          attrs: attrs, // 设置解析出的属性
        };
      }

      if (isCloseTag(content)) {
        const tagName = getTagName(content);
        const expectedTag = stack.pop();

        // 如果标签不匹配，当作普通html_inline处理
        if (expectedTag !== tagName) {
          return token;
        }

        return {
          ...token, // 保留原始token的所有属性，包括attrs
          type: 'html_inline_close',
          tag: tagName,
          nesting: -1,
        };
      }

      return token;
    });
  }

  defaultRules.code_inline = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx];

    return createVNode('code', slf.renderAttrs(token), [createVNode(Text, {}, token.content)]);
  };

  defaultRules.code_block = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx];
    const attrs = slf.renderAttrs(token);
    if (config.components.code) {
      return createVNode(config.components.code, {
        ...attrs,
        isBlock: true,
        info: '',
        text: token.content,
      });
    }

    return createVNode('pre', {}, [
      createVNode('code', attrs, [createVNode(Text, {}, token.content)]),
    ]);
  };

  // 定义规则配置：[ruleName, isBlock]
  const mathRules = [
    ['math_block', true],
    ['math_inline', false],
    ['math_inline_block', true],
    ['math_inline_bare_block', true],
    ['math_bracket_inline', false],
    ['math_bracket_block', true],
    ['math_bracket_inline_block', true],
  ];

  mathRules.forEach(([ruleName, isBlock]) => {
    defaultRules[ruleName] = (tokens, idx) => {
      return createMathVNode(tokens[idx].content, isBlock);
    };
  });

  defaultRules.fence = function (tokens, idx, options, _, slf) {
    const token = tokens[idx];
    const info = token.info ? unescapeAll(token.info).trim() : '';
    let langName = '';
    let langAttrs = '';
    let highlighted;

    if (info) {
      const arr = info.split(/(\s+)/g);
      langName = arr[0];
      langAttrs = arr.slice(2).join('');
    }
    if (config.components && config.components.mermaid && langName === 'mermaid') {
      const attrs = addLineNumber(token, slf.renderAttrs(token));
      return createVNode(config.components.mermaid, {
        ...attrs,
        content: token.content,
        language: langName,
        info: info,
      });
    }

    if (options.highlight) {
      highlighted =
        options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content);
    } else {
      highlighted = escapeHtml(token.content);
    }

    if (highlighted.indexOf('<pre') === 0) {
      return createHtmlVNode(highlighted, token);
    }

    const buildVNode = (attrs) => {
      const preAttrs = addLineNumber(token, {
        'data-info': info,
        'data-lang': langName,
      });

      if (config.components.code) {
        return createVNode(
          config.components.code,
          {
            key: highlighted,
            ...addLineNumber(token, attrs),
            text: token.content,
            info: info,
            isBlock: true,
          },
          () => []
        );
      }

      return createVNode('pre', preAttrs, [
        createVNode('code', { key: highlighted, ...attrs, innerHTML: highlighted }, []),
      ]);
    };

    if (info) {
      const i = token.attrIndex('class');
      const tmpAttrs = token.attrs ? token.attrs.slice() : [];

      if (i < 0) {
        tmpAttrs.push(['class', options.langPrefix + langName]);
      } else {
        tmpAttrs[i] = tmpAttrs[i].slice();
        tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
      }

      const tmpToken = {
        attrs: tmpAttrs,
      };

      return buildVNode(slf.renderAttrs(tmpToken));
    }

    return buildVNode(slf.renderAttrs(token));
  };

  defaultRules.image = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];

    return createVNode(
      'img',
      {
        ...slf.renderAttrs(token),
        alt: slf.renderInlineAsText(token.children || [], options, env),
      },
      []
    );
  };

  defaultRules.media = function (tokens, idx, _options, _env, slf) {
    const token = tokens[idx];
    return createVNode(
      token.tag,
      {
        controlsList: 'nodownload',
        controls: true,
        ...slf.renderAttrs(token),
      },
      []
    );
  };

  defaultRules.hardbreak = function () {
    return createVNode('br');
  };

  defaultRules.softbreak = function (_, __, options) {
    return options.breaks ? createVNode('br') : null;
  };

  defaultRules.text = function (tokens, idx) {
    return createVNode(Fragment, {}, [createVNode(Text, {}, tokens[idx].content)]);
  };

  defaultRules.html_block = function (tokens, idx) {
    const token = tokens[idx];
    if (token.contentVNode) {
      return token.contentVNode;
    }
    return createHtmlVNode(token.content, token);
  };

  defaultRules.html_inline = function (tokens, idx) {
    const token = tokens[idx];
    if (token.contentVNode) {
      return token.contentVNode;
    }

    return createHtmlVNode(token.content);
  };

  defaultRules.html_inline_open = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    return createVNode(token.tag, slf.renderAttrs(token), []);
  };

  defaultRules.html_inline_close = function () {
    // 结束标签返回null，完全由nesting机制处理
    return null;
  };

  defaultRules.html_void = function (tokens, idx, options, env, slf) {
    const token = tokens[idx];
    // 自闭合标签直接创建vnode，不需要children
    return createVNode(token.tag, slf.renderAttrs(token), []);
  };

  // DOMParser实例复用 - 性能优化
  let domParser = null;
  function getDOMParser() {
    if (!domParser) {
      domParser = new DOMParser();
    }
    return domParser;
  }

  function createHtmlVNode(html, token) {
    if (!html.trim()) {
      return null;
    }

    // 如果配置了 xss 过滤器，则对 HTML 进行过滤
    let processedHtml = html;
    if (config.xss && typeof config.xss.process === 'function') {
      processedHtml = config.xss.process(html);
    }

    const parser = getDOMParser();
    const doc = parser.parseFromString(processedHtml, 'text/html');

    return convertNodeToVNode(doc.body, token);
  }

  function convertNodeToVNode(node, token) {
    const children = [];

    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      const vnode = convertSingleNodeToVNode(childNode, token);

      if (vnode !== null) {
        if (vnode.isMultiple) {
          // 如果是多个节点，展开添加
          children.push(...vnode.nodes);
        } else {
          children.push(vnode);
        }
      }
    }

    if (children.length === 1) {
      return children[0];
    }

    return createVNode(Fragment, {}, children);
  }

  function convertSingleNodeToVNode(node, token) {
    const text = node.textContent;

    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        if (node.nodeName.toLowerCase() === 'qmmath') {
          const dataType = node.getAttribute('data-type');
          const isBlock = dataType === 'math_block';
          return createMathVNode(node.textContent.trim(), isBlock);
        }
        return convertElementToVNode(node, token);
      case Node.TEXT_NODE:
        if (!text.trim()) {
          return null;
        }
        return createVNode(Text, {}, text);

      case Node.COMMENT_NODE: {
        return null;
      }
      default:
        return null;
    }
  }

  function convertElementToVNode(element, token) {
    const tagName = element.tagName.toLowerCase();
    const attrs = {
      ...addLineNumber(token, {}),
    };

    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      // const attrName = attr.name.toLowerCase();
      let attrValue = attr.value;

      if (!validateAttrName(attr.name)) {
        continue;
      }

      attrs[attr.name] = attrValue;
    }

    const children = [];
    for (let i = 0; i < element.childNodes.length; i++) {
      const childNode = element.childNodes[i];
      const vnode = convertSingleNodeToVNode(childNode, token);

      if (vnode !== null) {
        if (vnode.isMultiple) {
          // 如果是多个节点，展开添加
          children.push(...vnode.nodes);
        } else {
          children.push(vnode);
        }
      }
    }

    return createVNode(tagName, attrs, children);
  }

  function renderToken(tokens, idx) {
    const token = tokens[idx];

    if (token.nesting === -1) {
      return null;
    }

    if (token.hidden) {
      return createVNode(Fragment, {}, []);
    }

    const attrs = addLineNumber(token, this.renderAttrs(token));
    return createVNode(token.tag, attrs, []);
  }

  function renderAttrs(token) {
    if (!token.attrs) {
      return {};
    }

    const result = {};

    token.attrs.forEach((token) => {
      if (validateAttrName(token[0])) {
        result[token[0]] = token[1];
      }
    });

    return result;
  }

  // 添加行号属性的辅助函数
  function addLineNumber(token, attrs = {}) {
    if (config.lineNumbers && token && token.map) {
      attrs[config.lineMarkup] = token.map[0] + 1;
    }
    return attrs;
  }

  function createMathVNode(formula, isBlock) {
    if (config.components.math) {
      return createVNode(config.components.math, {
        isBlock,
        text: formula,
      });
    }

    const mathDelimiter = '';
    return createVNode(Text, {}, `${mathDelimiter}${formula}${mathDelimiter}`);
  }

  function render(tokens, options, env) {
    const rules = this.rules;
    const vNodeParents = [];

    const result = tokens
      .map((token, i) => {
        const type = token.type;

        let vnode = null;
        let parent = null;
        if (type === 'inline') {
          // 转换children中的html_inline token
          const transformedChildren = transformHtmlInlineTokens(token.children || []);
          vnode = createVNode(Fragment, {}, this.render(transformedChildren, options, env));
        } else if (rules[type]) {
          const result = rules[type](tokens, i, options, env, this);
          if (typeof result === 'string') {
            vnode = createHtmlVNode(result, tokens[i]);
          } else if (result && result.node && result.parent) {
            parent = result.parent;
            vnode = result.node;
          } else {
            vnode = result;
          }
        } else {
          vnode = this.renderToken(tokens, i, options);
        }

        let isChild = false;
        const parentNode = vNodeParents[vNodeParents.length - 1] || null;

        if (vnode && parentNode) {
          if (!Array.isArray(parentNode.children)) {
            parentNode.children = [];
          }
          parentNode.children.push(vnode);
          isChild = true;
        }

        if (token.nesting === 1) {
          if (parent) {
            vNodeParents.push(parent);
          } else if (vnode) {
            vNodeParents.push(vnode);
          }
        }

        if (token.nesting === -1) {
          vNodeParents.pop();
        }

        return isChild ? null : vnode;
      })
      .filter((node) => !!node);

    return result;
  }

  md.renderer.rules = { ...md.renderer.rules, ...defaultRules };
  md.renderer.render = render;
  md.renderer.renderInline = render;
  md.renderer.renderAttrs = renderAttrs;
  md.renderer.renderToken = renderToken;
}
