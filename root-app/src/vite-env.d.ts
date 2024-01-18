/// <reference types="vite/client" />
/// <reference types="vitest" />

declare module 'product-mfe/pages' {
  const Home: ElementType;

  export default { Home };
}

declare module "store-mfe/store" {
  type store = {
    count: number;
    increment: () => void;
    decrement: () => void;
  }

  export default  {
    getState: () => store
  }
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
