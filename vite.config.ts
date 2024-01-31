import path from 'node:path';

import * as vite from 'vite';

import Vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';

export default vite.defineConfig({
  plugins: [Vue(), UnoCSS()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  }
});