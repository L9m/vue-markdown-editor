import { createVNode, Fragment, Comment, Text } from 'vue';
import { escapeHtml, unescapeAll } from 'markdown-it/lib/common/utils';
import xss from '@/utils/xss/index';

const attrNameReg = /^[a-zA-Z_:][a-zA-Z0-9:._-]*$/;
const attrEventReg = /^on/i;
const defaultRules = {};

const mathVnodeMap = new Map()
const MATH_COMMENT_REGEXP = /--MARKDOWN_MATH_(BLOCK|INLINE)_(.*?)--/;

function extractMathFormulas(text) {
  const mathRegex = /<!----MARKDOWN_MATH_(BLOCK|INLINE)_(.*?)---->/g;
  const formulas = [];
  let match;

  while ((match = mathRegex.exec(text)) !== null) {
    formulas.push({
      type: match[1], // BLOCK 或 INLINE
      formula: match[2] // 公式内容
    });
  }

  return formulas;
}

export default function (
  md,
  config = {
    components: {},
  }
) {

  function validateAttrName(name) {
    return attrNameReg.test(name) && !attrEventReg.test(name);
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
      return createMathVNode(tokens[idx].content, isBlock)
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
      return createVNode(config.components.mermaid, {
        ...slf.renderAttrs(token),
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
      return createHtmlVNode(highlighted);
    }

    const buildVNode = (attrs) => {
      const preAttrs = {
        'data-info': info,
        'data-lang': langName,
      };

      if (config.components.code) {
        return createVNode(
          config.components.code,
          { key: highlighted, ...attrs, text: token.content, info: info, isBlock: true },
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
    return createVNode(Text, {}, tokens[idx].content);
  };

  defaultRules.html_block = function (tokens, idx) {
    const token = tokens[idx];
    if (token.contentVNode) {
      return token.contentVNode;
    }
    return createHtmlVNode(token.content);
  };

  defaultRules.html_inline = function (tokens, idx) {
    const token = tokens[idx];
    if (token.contentVNode) {
      return token.contentVNode;
    }

    return createHtmlVNode(token.content);
  };

  function createHtmlVNode(html) {
    if (!html.trim()) {
      return null;
    }
    html = xss.process(html);

    computeMathInHtml(html);

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    return convertNodeToVNode(doc.body);
  }

  function convertNodeToVNode(node) {
    const children = [];

    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];
      const vnode = convertSingleNodeToVNode(childNode);

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

  function convertSingleNodeToVNode(node) {
    const text = node.textContent;

    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        return convertElementToVNode(node);
      case Node.TEXT_NODE:
        if (!text.trim()) {
          return null;
        }
        return createVNode(Text, {}, text);

      case Node.COMMENT_NODE: {
        const match = node.textContent.match(MATH_COMMENT_REGEXP);
        if (match && match[2]) {
          const mathType = match[1]; // BLOCK 或 INLINE
          const formula = match[2]; // 公式内容

          const isBlock = mathType === 'BLOCK';
          const key = JSON.stringify({ formula, isBlock });
          let vnode = mathVnodeMap.get(key);
          if (!vnode) {
            vnode = createMathVNode(formula, isBlock);
            mathVnodeMap.set(key, vnode);
          }

          return vnode;
        }
        return createVNode(Comment, {}, node.textContent);
      }
      default:
        return null;
    }
  }

  function convertElementToVNode(element) {
    const tagName = element.tagName.toLowerCase();
    const attrs = {};

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
      const vnode = convertSingleNodeToVNode(childNode);

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

  // 处理文本中的数学公式,预处理
  function computeMathInHtml(html) {
    if (!config.components.math) {
      return; // 如果没有传递 math 组件，直接返回
    }

    const mathFormulas = extractMathFormulas(html);
    mathFormulas.forEach(({ type, formula }) => {
      const isBlock = type === 'BLOCK';
      const key = JSON.stringify({ formula, isBlock });
      mathVnodeMap.set(key, createVNode(config.components.math, {
        isBlock,
        text: formula,
      }))
    });
  }

  function renderToken(tokens, idx) {
    const token = tokens[idx];

    if (token.nesting === -1) {
      return null;
    }

    // Tight list paragraphs
    if (token.hidden) {
      return createVNode(Fragment, {}, []);
    }

    if (token.tag === '--') {
      return createVNode(Comment);
    }

    return createVNode(token.tag, this.renderAttrs(token), []);
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

  function createMathVNode(formula, isBlock) {
    if (config.components.math) {
      return createVNode(config.components.math, {
        isBlock,
        text: formula,
      })

    }

    const mathDelimiter = ''
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
          vnode = createVNode(Fragment, {}, this.render(token.children || [], options, env));
        } else if (rules[type]) {
          const result = rules[type](tokens, i, options, env, this);
          if (typeof result === 'string') {
            vnode = createHtmlVNode(result);
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
