/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import type { PluginOption } from 'vite';

import type { Options } from '../types';
import { resolve } from 'node:path';
import Icons from 'unplugin-icons/vite';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export function configSvgIconsPlugin({ isBuild }: { isBuild: boolean }) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/icons')],
    svgoOptions: isBuild,
    // symbolId: 'icon-[name]',
  });
  return svgIconsPlugin as PluginOption;
}

export function configUnPluginIcons(
  framework?: Options['framework'],
  options?: Options['options'],
) {
  if (framework === 'react') {
    return Icons(
      /* options */
      Object.assign(
        {
          compiler: 'jsx',
          jsx: 'react',
          autoInstall: true,
        },
        options?.unPluginIcons,
      ),
    );
  } else {
    return Icons(
      Object.assign(
        {
          compiler: 'vue3',
          // 自动安装
          autoInstall: true,
        },
        options?.unPluginIcons,
      ),
    );
  }
}
