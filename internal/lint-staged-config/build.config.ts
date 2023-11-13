import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true, //清除dist目录
  entries: ['src/index', 'src/vue-app'],
  declaration: true, //生成声明文件
  rollup: {
    //rollup配置
    emitCJS: true, //生成cjs格式
  },
})
