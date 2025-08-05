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


export default function (md, config = {
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

defaultRules.code_inline = function(tokens, idx, _options, _, slf) {
  const token = tokens[idx]
  return createVNode('code', slf.renderAttrs(token), token.content)
}

defaultRules.code_block = function(tokens, idx, _options, _, slf) {
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
  
if (config.components.math) {
  defaultRules.math_block = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx]

    return createVNode(config.components.math, {
      ...slf.renderAttrs(token),
      isBlock: true,
      content: token.content,
    })
  }

  defaultRules.math_inline = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx]

    return createVNode(config.components.math, {
      ...slf.renderAttrs(token),
      isBlock: false,
      content: token.content
    })
  }

  defaultRules.math_inline_block = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx]

    return createVNode(config.components.math, {
      ...slf.renderAttrs(token),
      isBlock: true,
      content: token.content,
    })
  }

  defaultRules.math_inline_bare_block = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx]

    return createVNode(config.components.math, {
      ...slf.renderAttrs(token),
      isBlock: true,
      content: token.content,
    })
  }

  defaultRules.math_bracket_inline = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx]

    return createVNode(config.components.math, {
      ...slf.renderAttrs(token),
      isBlock: false,
      content: token.content,
    })
  }

  defaultRules.math_bracket_block = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx]

    return createVNode(config.components.math, {
      ...slf.renderAttrs(token),
      isBlock: true,
      content: token.content,
    })
  }

  defaultRules.math_bracket_inline_block = function (tokens, idx, _options, _, slf) {
    const token = tokens[idx]

    return createVNode(config.components.math, {
      ...slf.renderAttrs(token),
      isBlock: true,
      content: token.content,
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
  if (config.components && config.components.mermaid && langName === 'mermaid') {
    return createVNode(config.components.mermaid, {
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
  return createHtmlVNode(token.content)
}

defaultRules.html_inline = function(tokens, idx) {
  const token = tokens[idx]
  if (token.contentVNode) {
    return token.contentVNode
  }

  return createHtmlVNode(token.content)
}

// 预处理函数：转换公式中的标签字符
function preprocessMathTags(html) {
  // 匹配数学公式的正则表达式
  const mathBlockRegex = /\$\$([\s\S]*?)\$\$/g
  const mathInlineRegex = /\$((?:[^$]|\\\$)*?)\$/g
  
  // 转换 HTML 标签字符的函数
  function escapeMathTags(mathContent) {
    return mathContent
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }
  
  // 处理块级数学公式
  html = html.replace(mathBlockRegex, (match, mathContent) => {
    return '$$' + escapeMathTags(mathContent) + '$$'
  })
  
  // 处理内联数学公式
  html = html.replace(mathInlineRegex, (match, mathContent) => {
    return '$' + escapeMathTags(mathContent) + '$'
  })
  
  return html
}

// 还原函数：将转义的标签字符还原
function unescapeMathTags(mathContent) {
  return mathContent
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function createHtmlVNode(html) {
  if (!html.trim()) {
    return null
  }

  // 预处理：转换公式中的标签字符
  const processedHtml = preprocessMathTags(html)

  const template = document.createElement('template')
  template.innerHTML = processedHtml
  
  return convertNodeToVNode(template.content)
}

function convertNodeToVNode(node) {
  const children = []
  
  for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i]
    const vnode = convertSingleNodeToVNode(childNode)
    
    if (vnode !== null) {
      if (vnode.isMultiple) {
        // 如果是多个节点，展开添加
        children.push(...vnode.nodes)
      } else {
        children.push(vnode)
      }
    }
  }
  
  if (children.length === 1) {
    return children[0]
  }
  
  return createVNode(Fragment, {}, children)
}

  function convertSingleNodeToVNode(node) {
    const text = node.textContent
  
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      return convertElementToVNode(node)
    case Node.TEXT_NODE:
      if (!text.trim()) {
        return null
      }
      
      // 检查文本中是否包含数学公式
      if (config && (config.enableMathBlockInHtml || config.enableMathInlineInHtml)) {
        const mathNodes = handleMathInText(text)
        if (mathNodes.length > 1) {
          // 如果返回多个节点，需要返回一个数组标记
          return { isMultiple: true, nodes: mathNodes }
        } else if (mathNodes.length === 1) {
          return mathNodes[0]
        }
      }
      
      return createVNode(Text, {}, text)
      
    case Node.COMMENT_NODE:
      return createVNode(Comment, {}, node.textContent)
    default:
      return null
  }
}

function convertElementToVNode(element) {
  const tagName = element.tagName.toLowerCase()
  const attrs = {}
  
  for (let i = 0; i < element.attributes.length; i++) {
    const attr = element.attributes[i]
    const attrName = attr.name.toLowerCase()
    let attrValue = attr.value
    
    if (!validateAttrName(attr.name)) {
      continue
    }
    
    // 安全性检查 - 敏感属性和URL
    if (sensitiveAttrReg.test(attrName) && sensitiveUrlReg.test(attrValue)) {
      attrValue = ''
    }
    
    // 检查 data: URL
    if (attrName === 'href' && attrValue.toLowerCase().startsWith('data:')) {
      attrValue = ''
    }
    
    attrs[attr.name] = attrValue
  }
  
  const children = []
  for (let i = 0; i < element.childNodes.length; i++) {
    const childNode = element.childNodes[i]
    const vnode = convertSingleNodeToVNode(childNode)
    
    if (vnode !== null) {
      if (vnode.isMultiple) {
        // 如果是多个节点，展开添加
        children.push(...vnode.nodes)
      } else {
        children.push(vnode)
      }
    }
  }
  
  return createVNode(tagName, attrs, children)
}


  // 处理文本中的数学公式，返回 VNode 数组
  function handleMathInText(content) {
  if (!config || (!config.enableMathBlockInHtml && !config.enableMathInlineInHtml)) {
    return [createVNode(Text, {}, content)]
    }

    const vnodes = []
    let processedContent = content
    let hasMatch = false
    
    // 处理块级数学公式 $$...$$
    if (config.enableMathBlockInHtml) {
      const matches = Array.from(processedContent.matchAll(math_block_within_html_regex))
      for (const match of matches) {
        if (!match.groups) {
          continue;
        }

        hasMatch = true
        const html_before_math = match.groups.html_before_math;
        const math = match.groups.math;
        const html_after_math = match.groups.html_after_math;

        // 添加数学公式前的文本
        if (html_before_math && html_before_math.trim()) {
          vnodes.push(createVNode(Text, {}, html_before_math))
        }

        // 添加数学公式 VNode - 使用 math 组件
        if (math) {
          vnodes.push(createVNode(config.components.math, {
            type: 'math_block',
            isBlock: true,
            content: unescapeMathTags(math),
            markup: '$$'
          }))
        }

        if (html_after_math && html_after_math.trim()) {
          vnodes.push(createVNode(Text, {}, html_after_math))
        }
      }
      
      if (hasMatch) {
        return vnodes
      }
    }

    // 处理内联数学公式 $...$
    if (config.enableMathInlineInHtml) {
      const matches = Array.from(processedContent.matchAll(math_inline_within_html_regex))
      for (const match of matches) {
        if (!match.groups) {
          continue;
        }

        hasMatch = true
        const html_before_math = match.groups.html_before_math;
        const math = match.groups.math;
        const html_after_math = match.groups.html_after_math;

        // 添加数学公式前的文本
        if (html_before_math && html_before_math.trim()) {
          vnodes.push(createVNode(Text, {}, html_before_math))
        }

        // 添加数学公式 VNode - 使用 math 组件
        if (math) {
          vnodes.push(createVNode(config.components.math, {
            type: 'math_inline',
            isBlock: false,
            content: unescapeMathTags(math),
            markup: '$'
          }))
        }

        if (html_after_math && html_after_math.trim()) {
          vnodes.push(createVNode(Text, {}, html_after_math))
        }
      }
      
      if (hasMatch) {
        return vnodes
      }
    }

    // 如果没有找到数学公式，返回原始文本
    return [createVNode(Text, {}, content)]
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