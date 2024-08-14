/* eslint-disable */

function inlineCursor(state, silent) {
    const cursor_mark_up = '[[qm-private-cursor]]';
    const length = cursor_mark_up.length;
    if (state.src.slice(state.pos, state.pos + length) !== cursor_mark_up) {
      return false;
    } else {
      if (!silent) {
        const token = state.push('cursor_inline', 'cursor', 0);
        token.markup = 'cursor';
        token.content = 'cursor';
      }
    }
  
    state.pos += length;
    return true;
  }
  
  function htmlCursor(state) {
    const tokens = state.tokens;
    const cursorRegexp =  /(?<html_before_cursor>[\s\S]*?)\[\[qm-private-cursor\]\](?<html_after_cursor>[\s\S]*)/gm;
  
    for (let index = tokens.length - 1; index >= 0; index--) {
      const currentToken = tokens[index];
      const newTokens = [];
  
      if (currentToken.type !== 'html_block') {
        continue;
      }
  
      const content = currentToken.content;
  
      for (const match of content.matchAll(cursorRegexp)) {
        if (!match.groups) {
          continue;
        }
  
        const html_before_cursor = match.groups.html_before_cursor;
        const html_after_cursor = match.groups.html_after_cursor;
  
        let type = 'html_inline';
  
        if (html_before_cursor) {
          newTokens.push({
            ...currentToken,
            type,
            map: null,
            content: html_before_cursor,
          });
        }
  
  
          newTokens.push({
            ...currentToken,
            map: null,
            content: '',
            type: 'cursor_inline',
            markup: 'cursor',
            block: false,
            tag: 'cursor',
          });
  
      
  
        if (html_after_cursor) {
          newTokens.push({
            ...currentToken,
            type,
            map: null,
            content: html_after_cursor,
          })
        }
      }
  
      if (newTokens.length > 0) {
        tokens.splice(index, 1, ...newTokens);
      }
      
    }
    return true;
  }
  
  export default function (md, options) {
    // #region Parsing
    md.inline.ruler.after('escape', 'inlineCursor', inlineCursor);
  
    md.core.ruler.push('cursor_in_html_block', htmlCursor);
  
    const cursorInline = () => {
      return `<i class="qm-private-cursor qm-chat-cursor"></i>`;
    };
  
    const cursorRenderer = (tokens, idx) => {
      return cursorInline(tokens[idx].content);
    };
    md.renderer.rules.cursor_inline = cursorRenderer;
  }