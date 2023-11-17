import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  entries: ['src/index', 'src/react/index'],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
