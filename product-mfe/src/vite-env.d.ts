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
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
