/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        svgo: true,
        icon: 24,
        dimensions: true,
        svgoConfig: {
          plugins: [
            { moveGroupAttrsToElems: true },
            { convertPathData: true },
          ],
        },
      },
    }),
    federation({
      name: 'product-mfe',
      filename: 'product-mfe-entry.js',
      shared: ['react', 'react-dom', 'react-router-dom'],
      remotes: {
        'store-mfe': 'http://localhost:3002/assets/store-entry.js'
      },
      exposes: {
        './pages': './src/pages',

      },
    }),
  ],
  build: {
    sourcemap: false,
    outDir: 'build',
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
    open: true
  },
  preview: {
    port: 3001,
  },
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
