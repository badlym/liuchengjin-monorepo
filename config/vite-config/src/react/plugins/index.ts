// @ts-ignore: type unless
import react from '@vitejs/plugin-react-swc'
import { type PluginOption } from 'vite'

import { createAppConfigPlugin } from '../../plugins/appConfig'
import { createAutoImport } from '../../plugins/autoImport'
import { configCompressPlugin } from '../../plugins/compress'
import { configHtmlPlugin } from '../../plugins/html'
import stylePxToVw from '../../plugins/stylePxToVw'
// import { configMockPlugin } from './mock'
import { configSvgIconsPlugin, configUnPluginIcons } from '../../plugins/svgSprite'
import { configVisualizerConfig } from '../../plugins/visualizer'
import { Options } from '../../types'
import { pathResolve } from '../../utils'

import replaceDebugModuleIdPlugin from './replaceDebugModuleIdPlugin'
import resolveSrcAliasPlugin from './resolveSrcAliasPlugin'
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
    react(),
    resolveSrcAliasPlugin({
      appPath: pathResolve('./'),
    }),
    createAutoImport(framework, options),
    // customCssModulesSupport(),
  ]

  const appConfigPlugin = await createAppConfigPlugin({ root, isBuild })
  vitePlugins.push(appConfigPlugin)
  vitePlugins.push(replaceDebugModuleIdPlugin())
  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin({ isBuild }))

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin({ isBuild }))

  vitePlugins.push(configUnPluginIcons(framework, options))

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    compress &&
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
