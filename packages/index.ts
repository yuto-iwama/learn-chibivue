export type Options = {
  render: () => string;
};

export type App = {
  mount: (selector: string) => void;
};

export { createApp } from './runtime-dom';
