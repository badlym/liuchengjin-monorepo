import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/',
    },
    './src/index.ts',
  ],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
