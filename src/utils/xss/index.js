import xss from 'xss';
import { svgTagWhiteList, svgAttrWhiteList } from './svg';
import { katexTagWhiteList, katexAttrWhiteList } from './KaTex';
import { attrWhiteList, prefixAttrWhiteList, commonWhiteList } from './common';

const options = {
  whiteList: {
    ...xss.getDefaultWhiteList(),
    ...commonWhiteList,
    ...svgTagWhiteList,
    ...katexTagWhiteList,
  },
  allowCommentTag: true, // 允许注释节点
  onIgnoreTag(tag, html) {
    // 保留 MARKDOWN_MATH 注释不被转义
    if (html.match(/^<!----MARKDOWN_MATH_.*?---->$/)) {
      return html;
    }
  },
  onIgnoreTagAttr(tag, name, value) {
    if (
      (svgTagWhiteList[tag] && svgAttrWhiteList.includes(name)) ||
      (katexTagWhiteList[tag] && katexAttrWhiteList.includes(name)) ||
      attrWhiteList.some((attr) => attr === name) ||
      prefixAttrWhiteList.some((prefix) => name.startsWith(prefix))
    ) {
      return `${name}="${xss.escapeAttrValue(value)}"`;
    }
  },
};

const xssFilterInstance = new xss.FilterXSS(options);

xssFilterInstance.extend = function (extendOptions) {
  const instanceOptions = xssFilterInstance.options;

  Object.keys(extendOptions).forEach((optionName) => {
    // extend whiteList
    if (optionName === 'whiteList') {
      Object.keys(extendOptions.whiteList).forEach((tagName) => {
        const tagAttrWhiteList = extendOptions.whiteList[tagName];
        const instanceWhiteList = instanceOptions.whiteList;

        if (instanceWhiteList[tagName]) {
          instanceWhiteList[tagName] = [...instanceWhiteList[tagName], ...tagAttrWhiteList];
        } else {
          instanceWhiteList[tagName] = tagAttrWhiteList;
        }
      });
    } else if (optionName === 'onIgnoreTagAttr') {
      const oldHandler = instanceOptions[optionName];
      instanceOptions[optionName] = function (...arg) {
        const oldReturnVal = oldHandler.call(this, ...arg);
        const newReturnVal = extendOptions[optionName].call(this, ...arg);

        return oldReturnVal || newReturnVal;
      };
    } else {
      instanceOptions[optionName] = extendOptions[optionName];
    }
  });
};

export default xssFilterInstance;
