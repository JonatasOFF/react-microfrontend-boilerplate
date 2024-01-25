/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({

  build: {
    outDir: '../build/product-mfe',
    sourcemap: false,
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  plugins: [
    react(),
    tsconfigPaths(),

    federation({
      name: 'product-mfe',
      filename: 'product-mfe-entry.js',
      shared: ['react', 'react-dom', 'zustand'],
      exposes: {
        './pages': './src/pages',
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 60 * 1000,
    setupFiles: './src/setupTests.ts',
    include: ['./src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      exclude: ['**/pages/**/*.tsx', '**/routes/*.tsx'],
      include: [
        '**/components/**/*.tsx',
        '**/containers/**/*.tsx',
        '**/hooks/**/*.tsx',
        '**/common/utils/*.ts',
      ],
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
      thresholdAutoUpdate: true,
    },
  },
});
