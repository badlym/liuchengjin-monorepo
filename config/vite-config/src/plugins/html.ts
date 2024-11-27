import type { Options } from '../types';

/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import { createHtmlPlugin } from 'vite-plugin-html';

export function configHtmlPlugin({ isBuild, options }: { isBuild: boolean; options: Options }) {
  // console.log('看看是否解析了');
  // console.log(options.htmlPlugin);
  return createHtmlPlugin({
    minify: isBuild,
    viteNext: true,
    ...(options?.htmlPlugin ?? {}),
  });
}
