import { resolve } from 'node:path'

import dayjs from 'dayjs'
import { readPackageJSON } from 'pkg-types'
import { defineConfig, loadEnv, mergeConfig, type UserConfig } from 'vite'

import { createPlugins } from '../plugins'

import { commonConfig } from './common'

interface DefineOptions {
  overrides?: UserConfig
  options?: Record<string, unknown>
}

function defineApplicationConfig(defineOptions: DefineOptions = {}) {
  const { overrides = {}, options = {} } = defineOptions

  return defineConfig(async ({ command, mode }) => {
    const root = process.cwd()
    const isBuild = command === 'build'
    const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_ENABLE_ANALYZE, VITE_USE_PXVW } = loadEnv(
      mode,
      root,
    )

    const defineData = await createDefineData(root)
    const plugins = await createPlugins({
      isBuild,
      root,
      enableAnalyze: VITE_ENABLE_ANALYZE === 'true',
      enableMock: VITE_USE_MOCK === 'true',
      compress: VITE_BUILD_COMPRESS,
      enableStylePxToVw: VITE_USE_PXVW === 'true',
      framework: 'react',
      options,
    })

    const pathResolve = (pathname: string) => resolve(root, '.', pathname)

    const applicationConfig: UserConfig = {
      resolve: {
        alias: [
          {
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
          },
          // /@/xxxx => src/xxxx
          {
            find: /\/@\//,
            replacement: pathResolve('src') + '/',
          },
          // /#/xxxx => types/xxxx
          {
            find: /\/#\//,
            replacement: pathResolve('types') + '/',
          },
          // @/xxxx => src/xxxx
          {
            find: /@\//,
            replacement: pathResolve('src') + '/',
          },
          // #/xxxx => types/xxxx
          {
            find: /#\//,
            replacement: pathResolve('types') + '/',
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
          },
        },
      },
      css: {
        modules: {
          localsConvention: 'camelCase',
        },
      },
      plugins,
    }

    const mergedConfig = mergeConfig(commonConfig, applicationConfig)

    return mergeConfig(mergedConfig, overrides)
  })
}

async function createDefineData(root: string) {
  try {
    const pkgJson = await readPackageJSON(root)
    const { dependencies, devDependencies, name, version } = pkgJson

    const __APP_INFO__ = {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }
    return {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    }
  } catch (error) {
    return {}
  }
}

export { createPlugins, defineApplicationConfig }
