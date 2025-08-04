import { createVNode, Fragment, Comment, Text } from 'vue'
import { escapeHtml, unescapeAll } from 'markdown-it/lib/common/utils'

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
  
  if (options.components.math_block) {
    
    
    defaultRules.math_block = function (tokens, idx, opts, _, slf) {

      const token = tokens[idx]

      console.log({
        ...slf.renderAttrs(token),
        text: token.content
      })

      return createVNode(options.components.math_block, {
        ...slf.renderAttrs(token),
        text: token.content
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

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml(token.content)
  } else {
    highlighted = escapeHtml(token.content)
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n'
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

defaultRules.html_block = function(tokens, idx) {
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

    attrs.innerHTML = element.innerHTML
    attrs.key = element.innerHTML

    children.push(createVNode(tagName, attrs, []))
  }

  return createVNode(Fragment, {}, children)
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
      token.attrSet(DOM_ATTR_NAME.TOKEN_IDX, i.toString())
    }

    const type = token.type

    let vnode = null
    let parent = null

    if (type === 'inline') {
      vnode = createVNode(Fragment, {}, this.render(token.children || [], options, env))
    } else if (rules[type]) {
      const result = rules[type](tokens, i, options, env, this)
      if (typeof result === 'string') {
        vnode = createHtmlVNode(result)
      } else if (result && result.node && result.parent) {
        parent = result.parent
        vnode = result.node
      } else {
        vnode = result
      }
    } else {
      vnode = this.renderToken(tokens, i, options)
    }

    let isChild = false
    const parentNode = vNodeParents.length > 0 ? vNodeParents[vNodeParents.length - 1] : null
    if (vnode && parentNode) {
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