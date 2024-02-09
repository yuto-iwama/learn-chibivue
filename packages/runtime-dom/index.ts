import { createCreateApp, createRenderer } from '../runtime-core';
import { nodeOps } from './nodeOps';

const { render } = createRenderer(nodeOps);

export const createApp = createCreateApp(render, (query: string) =>
  document.querySelector(query)
);
