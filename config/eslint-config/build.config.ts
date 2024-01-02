import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  preset: undefined,
  clean: true,
  entries: [
    'src/index',
    'src/strict',
    'src/react-app',
    'src/vue',
    'src/base',
    'src/base-ts',
    'src/nest-app',
  ],
  declaration: true, // 生成声明文件
  rollup: {
    emitCJS: true, // 生成cjs文件
  },
});
