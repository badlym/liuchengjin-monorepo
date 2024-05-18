import antfu from '@antfu/eslint-config'

export default function reactConfig(options) {
  return antfu({
    stylistic: {
      semi: true,
    },
    react: true,
    vue: false,
    typescript: true,
    ...options,
  })
}
