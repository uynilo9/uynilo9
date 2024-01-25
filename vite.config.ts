import path from 'node:path';
import * as vite from 'vite';
import Vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';

export default vite.defineConfig({
  plugins: [Vue(), WindiCSS()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
});