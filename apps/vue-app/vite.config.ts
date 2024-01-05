import { defineApplicationConfig } from '@liuchengjin/vite-config';
import UnoCSS from 'unocss/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineApplicationConfig({
  overrides: {
    base: '/',
    plugins: [UnoCSS()],
    build: {
      // commonjsOptions: {
      //   include: [/node_modules/],
      // },
      rollupOptions: {
        output: {
          manualChunks: {
            // antd: ['ant-design-vue', '@ant-design/icons-vue'],
          },
        },
      },
    },
    server: {
      port: 5678,
    },
  },
  options: {
    autoImport: {
      resolvers: [ElementPlusResolver()],
    },
  },
}) as Record<string, any>;
