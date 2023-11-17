import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore: type unless
import DefineOptions from 'unplugin-vue-define-options/vite'
import { type PluginOption } from 'vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

import { Options } from '../types'

import { createAppConfigPlugin } from './appConfig'
import { configAutoImportComponent, createAutoImport } from './autoImport'
import { configCompressPlugin } from './compress'
import { configHtmlPlugin } from './html'
import stylePxToVw from './stylePxToVw'
// import { configMockPlugin } from './mock'
import { configSvgIconsPlugin, configUnPluginIcons } from './svgSprite'
import { configVisualizerConfig } from './visualizer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
async function createPlugins({
  isBuild,
  root,
  // _enableMock,
  compress,
  enableAnalyze,
  enableStylePxToVw,
  framework,
  options,
}: Options) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    enableStylePxToVw && stylePxToVw(),
    vue(),
    // vitePluginMars3d({ name: 'szmap3d' }),
    vueJsx(),
    vueSetupExtend(),
    DefineOptions(),
    createAutoImport(),
    framework && framework === 'vue' && configAutoImportComponent(options),
  ]
  const appConfigPlugin = await createAppConfigPlugin({ root, isBuild })
  vitePlugins.push(appConfigPlugin)

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin({ isBuild }))

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin({ isBuild }))
  // vitePlugins.push()
  vitePlugins.push(configUnPluginIcons(framework, options))

  // vite-plugin-purge-icons
  // vitePlugins.push(purgeIcons())

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin({
        compress,
      }),
    )
  }

  // rollup-plugin-visualizer
  if (enableAnalyze) {
    vitePlugins.push(configVisualizerConfig())
  }

  // vite-plugin-mock
  // if (enableMock) {
  //   vitePlugins.push(configMockPlugin({ isBuild }))
  // }

  return vitePlugins
}

export { createPlugins }
