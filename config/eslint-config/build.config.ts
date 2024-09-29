import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  preset: undefined,
  clean: true,
  entries: ['src/index', 'src/react-app', 'src/vue-app', 'src/base', 'src/nest-app'],
  declaration: true, // 生成声明文件
  rollup: {
    emitCJS: true, // 生成cjs文件
  },
})
