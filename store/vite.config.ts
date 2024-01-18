import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    federation({
      name: "store-mfe",
      filename: "store-entry.js",
      shared: ["zustand"],
      exposes: {
        "./store": "./src/store",
      },
    }),
  ],
  build: {
    sourcemap: false,
    outDir: "build",
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3002,
    open: true,
  },
  preview: {
    port: 3002,
  },
});
