import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default function config(options) {
  return antfu(
    {
      stylistic: false,
      vue: false,
      typescript: true,
      ...options,
    },
    eslintPluginPrettierRecommended,
  )
}
