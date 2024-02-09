import { RootRenderFunction, RootRenderSelector } from '.';

export type Options = {
  render: () => string;
};

export type App = {
  mount: (selector: string) => void;
};

export const createCreateApp = (
  renderer: RootRenderFunction,
  elementSelector: RootRenderSelector
) => {
  return (options: Options): App => {
    const { render } = options;
    return {
      mount: (selector) => {
        const root = elementSelector(selector);
        if (root) {
          renderer(render(), root);
        }
      },
    };
  };
};
