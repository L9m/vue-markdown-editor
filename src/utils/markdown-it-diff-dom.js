import { createVNode, Fragment, Comment, Text } from 'vue'
import { escapeHtml, unescapeAll } from 'markdown-it/lib/common/utils'

// 数学公式处理正则表达式
const math_block_within_html_regex = /(?<html_before_math>[\s\S]*?)\$\$(?<math>[\s\S]+?)\$\$(?<html_after_math>(?:(?!\$\$[\s\S]+?\$\$)[\s\S])*)/gm;
const math_inline_within_html_regex = /(?<html_before_math>[\s\S]*?)\$(?<math>.*?)\$(?<html_after_math>(?:(?!\$.*?\$)[\s\S])*)/gm;


export const DOM_ATTR_NAME = {
  SOURCE_LINE_START: 'data-source-line',
  SOURCE_LINE_END: 'data-source-line-end',
  ORIGIN_SRC: 'origin-src',
  TARGET_REPO: 'target-repo',
  TARGET_PATH: 'target-path',
  LOCAL_IMAGE: 'local-image',
  ONLY_CHILD: 'auto-center',
  TOKEN_IDX: 'data-token-idx',
  DISPLAY_NONE: 'display-none',
  WIKI_LINK: 'wiki-link',
  WIKI_RESOURCE: 'wiki-resource',
  IS_ANCHOR: 'is-anchor',
  SKIP_EXPORT: 'skip-export',
  DATA_HASHTAG: 'data-hashtag',
}

const sensitiveUrlReg = /^javascript:|vbscript:|file:/i
const sensitiveAttrReg = /^href|src|xlink:href|poster|srcset$/i
const attrNameReg = /^[a-zA-Z_:][a-zA-Z0-9:._-]*$/
const attrEventReg = /^on/i
const defaultRules = {}


export default function (md, options = {
  components: {}
}) {

function onLeavepictureinpicture(e) {
  const target = e.target
  if (!target.isConnected) {
    target.pause()
  } else {
    target.scrollIntoViewIfNeeded()
  }
}

function validateAttrName(name) {
  return attrNameReg.test(name) && !attrEventReg.test(name)
}

function getLine(token, env) {
  const [lineStart, lineEnd] = token.map || [0, 1]

  // macro, calc line offset, see `markdown-macro` plugin.
  let sOffset = 0
  if (env?.macroLines && env.bMarks && env.eMarks) {
    const sPos = env.bMarks[lineStart]
    for (let i = 0; i < env.macroLines.length; i++) {
      const { matchPos, lineOffset, posOffset, currentPosOffset } = env.macroLines[i]
      if (sPos + posOffset > matchPos && sPos + posOffset - currentPosOffset > matchPos) {
        sOffset = lineOffset
      } else {
        break
      }
    }
  }

  return [lineStart + sOffset, lineEnd + sOffset]
}

function processToken(token, env) {
  if (!token.meta) {
    token.meta = {}
  }

  if (env?.safeMode) {
    token.attrs?.forEach(([name, val]) => {
      name = name.toLowerCase()
      if (sensitiveAttrReg.test(name) && sensitiveUrlReg.test(val)) {
        token.attrSet(name, '')
      }

      if (name === 'href' && val.toLowerCase().startsWith('data:')) {
        token.attrSet(name, '')
      }
    })
  }

  if (token.block) {
    const [lineStart, lineEnd] = getLine(token, env)

    if (token.map) {
      token.attrSet(DOM_ATTR_NAME.SOURCE_LINE_START, String(lineStart + 1))
      token.attrSet(DOM_ATTR_NAME.SOURCE_LINE_END, String(lineEnd + 1))
      if (!token.meta.attrs) {
        token.meta.attrs = {}
      }

      // transform array to object
      token.attrs?.forEach(([name, val]) => {
        token.meta.attrs[name] = val
      })
    }
  }
}

defaultRules.code_inline = function(tokens, idx, _, __, slf) {
  const token = tokens[idx]
  return createVNode('code', slf.renderAttrs(token), token.content)
}

defaultRules.code_block = function(tokens, idx, _, __, slf) {
  const token = tokens[idx]
  const attrs = slf.renderAttrs(token)
  const preAttrs = {
    [DOM_ATTR_NAME.SOURCE_LINE_START]: attrs[DOM_ATTR_NAME.SOURCE_LINE_START],
    [DOM_ATTR_NAME.SOURCE_LINE_END]: attrs[DOM_ATTR_NAME.SOURCE_LINE_END],
  }

  delete attrs[DOM_ATTR_NAME.SOURCE_LINE_START]
  delete attrs[DOM_ATTR_NAME.SOURCE_LINE_END]

  return createVNode(
    'pre',
    preAttrs,
    [createVNode('code', attrs, [createVNode(Text, {}, token.content)])]
  )
}
  
if (options.components.math) {
  defaultRules.math_block = function (tokens, idx, options, _, slf) {
    const token = tokens[idx]

    return createVNode(options.components.math, {
      ...slf.renderAttrs(token),
      type: 'math_block',
      isBlock: true,
      content: token.content,
      markup: token.markup || '$$'
    })
  }

  defaultRules.math_inline = function (tokens, idx, options, _, slf) {
    const token = tokens[idx]

    return createVNode(options.components.math, {
      ...slf.renderAttrs(token),
      type: 'math_inline',
      isBlock: false,
      content: token.content,
      markup: token.markup || '$'
    })
  }

  defaultRules.math_inline_block = function (tokens, idx, options, _, slf) {
    const token = tokens[idx]

    return createVNode(options.components.math, {
      ...slf.renderAttrs(token),
      type: 'math_inline_block',
      isBlock: true,
      content: token.content,
      markup: token.markup || '$$'
    })
  }

  defaultRules.math_inline_bare_block = function (tokens, idx, options, _, slf) {
    const token = tokens[idx]

    return createVNode(options.components.math, {
      ...slf.renderAttrs(token),
      type: 'math_inline_bare_block',
      isBlock: true,
      content: token.content,
      markup: token.markup || '$$'
    })
  }

  defaultRules.math_bracket_inline = function (tokens, idx, options, _, slf) {
    const token = tokens[idx]

    return createVNode(options.components.math, {
      ...slf.renderAttrs(token),
      type: 'math_bracket_inline',
      isBlock: false,
      content: token.content,
      markup: token.markup || '\\('
    })
  }

  defaultRules.math_bracket_block = function (tokens, idx, options, _, slf) {
    const token = tokens[idx]

    return createVNode(options.components.math, {
      ...slf.renderAttrs(token),
      type: 'math_bracket_block',
      isBlock: true,
      content: token.content,
      markup: token.markup || '\\['
    })
  }

  defaultRules.math_bracket_inline_block = function (tokens, idx, options, _, slf) {
    const token = tokens[idx]

    return createVNode(options.components.math, {
      ...slf.renderAttrs(token),
      type: 'math_bracket_inline_block',
      isBlock: true,
      content: token.content,
      markup: token.markup || '\\('
    })
  }
}

defaultRules.fence = function(tokens, idx, options, _, slf) {
  const token = tokens[idx]
  const info = token.info ? unescapeAll(token.info).trim() : ''
  let langName = ''
  let langAttrs = ''
  let highlighted

  if (info) {
    const arr = info.split(/(\s+)/g)
    langName = arr[0]
    langAttrs = arr.slice(2).join('')
  }

  // Check if mermaid component is provided and language is mermaid
  if (options.components && options.components.mermaid && langName === 'mermaid') {
    return createVNode(options.components.mermaid, {
      ...slf.renderAttrs(token),
      content: token.content,
      language: langName,
      info: info
    })
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content)
  } else {
    highlighted = escapeHtml(token.content)
  }

  if (highlighted.indexOf('<pre') === 0) {
    return createHtmlVNode(highlighted)
  }

  const buildVNode = (attrs) => {
    const preAttrs = {
      'data-info': info,
      'data-lang': langName,
      [DOM_ATTR_NAME.SOURCE_LINE_START]: attrs[DOM_ATTR_NAME.SOURCE_LINE_START],
      [DOM_ATTR_NAME.SOURCE_LINE_END]: attrs[DOM_ATTR_NAME.SOURCE_LINE_END],
    }

    delete attrs[DOM_ATTR_NAME.SOURCE_LINE_START]
    delete attrs[DOM_ATTR_NAME.SOURCE_LINE_END]

    return createVNode(
      'pre',
      preAttrs,
      [createVNode('code', { key: highlighted, ...attrs, innerHTML: highlighted }, [])]
    )
  }

  if (info) {
    const i = token.attrIndex('class')
    const tmpAttrs = token.attrs ? token.attrs.slice() : []

    if (i < 0) {
      tmpAttrs.push(['class', options.langPrefix + langName])
    } else {
      tmpAttrs[i] = tmpAttrs[i].slice()
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName
    }

    const tmpToken = {
      attrs: tmpAttrs
    }

    return buildVNode(slf.renderAttrs(tmpToken))
  }

  return buildVNode(slf.renderAttrs(token))
}

defaultRules.image = function(tokens, idx, options, env, slf) {
  const token = tokens[idx]

  return createVNode('img', {
    ...slf.renderAttrs(token),
    alt: slf.renderInlineAsText(token.children || [], options, env)
  }, [])
}

defaultRules.media = function(tokens, idx, _options, _env, slf) {
  const token = tokens[idx]
  return createVNode(token.tag, {
    controlsList: 'nodownload',
    controls: true,
    onLeavepictureinpicture,
    ...slf.renderAttrs(token),
  }, [])
}

defaultRules.hardbreak = function() {
  return createVNode('br')
}

defaultRules.softbreak = function(_, __, options) {
  return options.breaks ? createVNode('br') : null
}

defaultRules.text = function(tokens, idx) {
  return createVNode(Text, {}, tokens[idx].content)
}

defaultRules.html_block = function (tokens, idx) {
  const token = tokens[idx]
  if (token.contentVNode) {
    return token.contentVNode
    }
  return handleMathInHtml(token.content)
}

defaultRules.html_inline = function(tokens, idx) {
  const token = tokens[idx]
  if (token.contentVNode) {
    return token.contentVNode
  }

  return handleMathInHtml(token.content)
}

function createHtmlVNode(html) {
  const div = document.createElement('template')
  div.innerHTML = html
  const elements = div.content.children
  const children = []
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const tagName = element.tagName.toLowerCase()
    const attrs = {
      key: element.outerHTML
    }

    for (let j = 0; j < element.attributes.length; j++) {
      const attr = element.attributes[j]
      attrs[attr.name] = attr.value
    }

    // 检查是否是数学公式元素
    if (element.classList.contains('math-block') || element.classList.contains('math-inline')) {
      const mathContent = element.getAttribute('data-math')
      if (mathContent) {
        // 创建数学公式 VNode，这里可以调用已有的数学公式渲染逻辑
        // 暂时保持原有结构，但标记为数学公式
        attrs['data-math'] = mathContent
        attrs.innerHTML = mathContent // 显示原始数学公式
      }
    } else {
      attrs.innerHTML = element.innerHTML
    }
    
    attrs.key = element.innerHTML

    children.push(createVNode(tagName, attrs, []))
  }

  return createVNode(Fragment, {}, children)
  }

function createHtmlVNode2(html) {
    // 创建一个特殊的 VNode，直接插入 HTML
    return createVNode(Fragment, {dangerouslySetInnerHTML: { __html: html }})
  }


  // 处理 HTML 中的数学公式，直接返回 VNode
  function handleMathInHtml(content) {
  if (!options || (!options.enableMathBlockInHtml && !options.enableMathInlineInHtml)) {
    return createHtmlVNode(content)
    }

    const vnodes = []
    if (options.enableMathBlockInHtml) {
      let processedContent = content
      for (const match of processedContent.matchAll(math_block_within_html_regex)) {
        if (!match.groups) {
          continue;
        }

        const html_before_math = match.groups.html_before_math;
        const math = match.groups.math;
        const html_after_math = match.groups.html_after_math;

        // 添加数学公式前的 HTML
        if (html_before_math) {
          vnodes.push(createHtmlVNode2(html_before_math))
        }

        // 添加数学公式 VNode - 使用 math 组件
        if (math) {
          console.log(math)
          vnodes.push(createVNode(options.components.math, {
            isBlock: true,
            content: math
          }))
        }

        if (html_after_math) {
          vnodes.push(createHtmlVNode2(html_after_math))
        }
      }
    }

    if (options.enableMathInlineInHtml) {
      let processedContent = content
      for (const match of processedContent.matchAll(math_inline_within_html_regex)) {
        if (!match.groups) {
          continue;
        }

        const html_before_math = match.groups.html_before_math;
        const math = match.groups.math;
        const html_after_math = match.groups.html_after_math;

        // 添加数学公式前的 HTML

        console.log(html_before_math)
        if (html_before_math) {
          vnodes.push(createHtmlVNode2(html_before_math))
        }

        // 添加数学公式 VNode - 使用 math 组件

        if (math) {
          vnodes.push(createVNode(options.components.math, {
            isBlock: false,
            content: math
          }))
        }

             console.log(html_after_math)

        if (html_after_math) {
          vnodes.push(createHtmlVNode2(html_after_math))
        }
      }
    }

    console.log(vnodes)


    return vnodes.length === 1 ? vnodes[0] : createVNode(Fragment, {}, vnodes)
}


function renderToken(tokens, idx) {
  const token = tokens[idx]

  if (token.nesting === -1) {
    return null
  }

  // Tight list paragraphs
  if (token.hidden) {
    return createVNode(Fragment, {}, [])
  }

  if (token.tag === '--') {
    return createVNode(Comment)
  }

  return createVNode(token.tag, this.renderAttrs(token), [])
}

function renderAttrs(token) {
  if (!token.attrs) {
    return {}
  }

  const result = {}

  token.attrs.forEach(token => {
    if (validateAttrName(token[0])) {
      result[token[0]] = token[1]
    }
  })

  return result
}

function render(tokens, options, env) {
  const rules = this.rules
  const vNodeParents = []

  return tokens.map((token, i) => {
    processToken(token, env)
    if (token.block) {
      if (token.attrSet) {
        token.attrSet(DOM_ATTR_NAME.TOKEN_IDX, i.toString())
      }
    }

    const type = token.type

    let vnode = null
    let parent = null
    if (type === 'inline') {
      vnode = createVNode(Fragment, {}, this.render(token.children || [], options, env))
    } else if (rules[type]) {
      const result = rules[type](tokens, i, options, env, this)
      if (typeof result === 'string') {
        console.log(result)
        vnode = createHtmlVNode(result)
      } else if (result && result.node && result.parent) {
        parent = result.parent
        vnode = result.node
      } else {
        vnode = result
      }
    } else if (type.startsWith('container_') && (type.endsWith('_open') || type.endsWith('_close'))) {
      // Handle markdown-it-container tokens that generate HTML
      const renderer = md.renderer.rules[type]
      if (renderer) {
        const htmlResult = renderer(tokens, i, options, env, md.renderer)
        if (typeof htmlResult === 'string') {
          vnode = createHtmlVNode(htmlResult)
        }
      }
    } else {
      vnode = this.renderToken(tokens, i, options)
    }

    let isChild = false
    const parentNode = vNodeParents.length > 0 ? vNodeParents[vNodeParents.length - 1] : null
    
    console.log(vnode,parentNode)
    if (vnode && parentNode) {
      // 调试：当处理数学公式时打印父节点信息
      if (type.includes('math')) {
        console.log('Math token type:', type)
        console.log('Parent node type:', parentNode.type)
        console.log('Parent node tag:', parentNode.type)
        console.log('VNode type:', vnode.type)
        console.log('Stack depth:', vNodeParents.length)
      }
      
      if (typeof parentNode.type === 'string' || parentNode.type === Fragment) {
        const children = Array.isArray(parentNode.children) ? parentNode.children : []
        parentNode.children = children.concat([vnode])
      }
      isChild = true
    }

    if (token.nesting === 1) {
      if (parent) {
        vNodeParents.push(parent)
      } else if (vnode) {
        vNodeParents.push(vnode)
      }
    }

    if (token.nesting === -1) {
      vNodeParents.pop()
    }

    return isChild ? null : vnode
  }).filter(node => !!node)
}

  md.renderer.rules = { ...md.renderer.rules, ...defaultRules }
  md.renderer.render = render
  md.renderer.renderInline = render
  md.renderer.renderAttrs = renderAttrs
  md.renderer.renderToken = renderToken
}