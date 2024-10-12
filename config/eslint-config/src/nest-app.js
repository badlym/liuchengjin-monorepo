import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
//

export default function nestConfig(options) {
  return antfu(
    {
      stylistic: false,
      react: true,
      vue: false,
      typescript: true,
      ...options,
    },
    eslintPluginPrettierRecommended,
  )
}
