import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { Options } from '../types'

export const createAutoImport = (
  framework?: Options['framework'],
  options?: Options['options'],
) => {
  if (framework === 'react') {
    return AutoImport(
      Object.assign(
        {
          imports: ['react', 'react-router-dom'],
          dts: './src/auto-imports.d.ts',
          dirs: ['src/layouts/**', 'src/views/**', 'src/components/**', 'src/store/**'],
          eslintrc: {
            enabled: true,
          },
          defaultExportByFilename: true,
        },
        options?.autoImport,
      ),
    )
  } else {
    return AutoImport(
      Object.assign(
        {
          // 自动导入vue相关的Api
          // 目标文件
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/,
            /\.vue\?vue/, // .vue
            /\.md$/, // .md
          ],

          imports: [
            'vue',
            'vue-router',
            '@vueuse/core',
            /* 自定义 */
            {
              'lodash/isUndefined': [['default', 'isUndefined']],
              /* 自定义模块 */
              api: [['default', 'api']],
              hooks: [['default', 'hooks']],
              store: [['default', 'store']],
            },
          ],
          defaultExportByFilename: true,
          // eslint报错解决
          eslintrc: {
            enabled: true, // Default `false`
            filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
            globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          },
          dts: './types/auto-imports.d.ts',
          dirs: ['src/layouts/**', 'src/views/**', 'src/components/**', 'src/store/**'],
        },
        options?.autoImport,
      ),
    )
  }
}

export function configAutoImportComponent(options?: Options['options']) {
  return Components(
    Object.assign(
      {
        dirs: ['src/layouts/**', 'src/views/**', 'src/components/**'],
      },
      options?.autoImportComponent,
    ),
  )
}
