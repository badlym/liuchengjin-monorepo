import type { Options } from '../types';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export const createAutoImport = (framework?: Options['framework'], options?: Options) => {
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
        options?.autoImport ?? {},
      ),
    );
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
            /* 自定义 */
            {
              // // 'lodash/isUndefined': [['default', 'isUndefined']],
              // /* 自定义模块 */
              // // api: [['default', 'api']],
              // hooks: [['default', 'hooks']],
              // stores: [['default', 'stores']],
            },
          ],
          defaultExportByFilename: true,
          // eslint报错解决
          eslintrc: {
            enabled: true, // Default `false`
            filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
            globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          },
          // eslintrc: false,

          dts: './types/auto-imports.d.ts',
          // dirs: ['src/layout/**', 'src/views/**', 'src/components/**', 'src/stores/**'],
        },
        options?.autoImport ?? {},
      ),
    );
  }
};

export function configAutoImportComponent(options?: Options) {
  return Components(
    Object.assign(
      {
        directoryAsNamespace: true,
        dirs: ['src/components'],
        extensions: ['vue', 'tsx'],
        dts: './types/components.d.ts', // 配置文件生成位置,
      },
      options?.autoImportComponent ?? {},
    ),
  );
}
