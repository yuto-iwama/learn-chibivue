import { RendererOptions } from '../runtime-core';

export const nodeOps: Omit<RendererOptions<Node>, 'patchProp'> = {
  createElement: (tagName) => {
    return document.createElement(tagName);
  },

  createText: (text) => {
    return document.createTextNode(text);
  },

  setElementText(node, text) {
    node.textContent = text;
  },

  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
};
