import antfu from '@antfu/eslint-config'

export default function config(options) {
  return antfu({
    vue: false,
    typescript: true,
    ...options,
  })
}
