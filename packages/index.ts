export type Options = {
  render: () => string;
};

export type App = {
  mount: (selector: string) => void;
};

export const createApp = (options: Options): App => {
  return {
    mount: (selectors: string) => {
      const root = document.querySelector(selectors);
      if (root) {
        root.innerHTML = options.render();
      }
    },
  };
};
