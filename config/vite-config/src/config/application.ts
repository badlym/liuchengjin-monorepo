import { resolve } from 'node:path';

import dayjs from 'dayjs';
import { readPackageJSON } from 'pkg-types';
import { type UserConfig, defineConfig, loadEnv, mergeConfig } from 'vite';

import { createPlugins } from '../plugins';
import { Options } from '../types';

import { commonConfig } from './common';

interface DefineOptions {
  overrides?: UserConfig;
  options?: Options;
}

function defineApplicationConfig(callback: (config: { command: string; mode: string }) => DefineOptions) {
  console.log('进入了程序');

  return defineConfig(async ({ command, mode }) => {
    const { overrides = {}, options = {} } = callback({ command, mode });
    const root = process.cwd();
    console.log(mode, '当前模式');
    const env = loadEnv(mode, process.cwd(), options.envPrefix);
    console.log(env, '环境变量');

    const isBuild = command === 'build';
    const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_ENABLE_ANALYZE } = loadEnv(mode, root);

    const defineData = await createDefineData(root);
    const plugins = await createPlugins({
      isBuild,
      root,
      enableAnalyze: VITE_ENABLE_ANALYZE === 'true',
      enableMock: VITE_USE_MOCK === 'true',
      compress: VITE_BUILD_COMPRESS,
      framework: 'vue',
      options,
    });

    const pathResolve = (pathname: string) => resolve(root, '.', pathname);

    const applicationConfig: UserConfig = {
      resolve: {
        alias: [
          // /@/xxxx => src/xxxx

          // /#/xxxx => types/xxxx
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

          {
            find: /~\//,
            replacement: `'./`,
          },
        ],
      },
      define: defineData,
      build: {
        target: 'es2015',
        cssTarget: 'chrome80',
        rollupOptions: {
          output: {
            // 入口文件名
            entryFileNames: 'assets/[name].js',
            manualChunks: {
              // vue: ['vue', 'pinia', 'vue-router'],
            },
            // manualChunks(id) {
            //   console.log(id)
            //   if (id.includes('node_modules')) {
            //     return id
            //       .toString()
            //       .replace('/.pnpm', '')
            //       .split('node_modules/')[1]
            //       .split('/')[0]
            //       .toString()
            //   }
            // },
          },
        },
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
          scss: {
            additionalData: `@import "@/styles/var.scss";`,
            api: 'modern-compiler',
          },
        },
      },
      plugins,
    };

    const mergedConfig = mergeConfig(commonConfig, applicationConfig);

    return mergeConfig(mergedConfig, overrides);
  });
}

async function createDefineData(root: string) {
  try {
    const pkgJson = await readPackageJSON(root);
    const { dependencies, devDependencies, name, version } = pkgJson;

    const __APP_INFO__ = {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    };
    return {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    };
  } catch (error) {
    return {};
  }
}

export { createPlugins, defineApplicationConfig };
