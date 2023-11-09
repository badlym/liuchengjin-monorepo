import { resolve } from 'node:path'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
const root = process.cwd()
const pathResolve = (pathname: string) => resolve(root, '.', pathname)
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: `${pathResolve('src')}/`,
      },
      // /#/xxxx => types/xxxx
      {
        find: /\/#\//,
        replacement: `${pathResolve('types')}/`,
      },
      // @/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`,
      },
      // #/xxxx => types/xxxx
      {
        find: /#\//,
        replacement: `${pathResolve('types')}/`,
      },
    ],
  },
})
