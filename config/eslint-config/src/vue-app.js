import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
//
console.log(eslintPluginPrettierRecommended, 'eslintPluginPrettierRecommended')

export default function reactConfig(options) {
  return antfu(
    {
      stylistic: false,
      react: false,
      vue: true,
      typescript: true,
      ...options,
    },
    // {
    //   rules: {
    //     'style/semi': ['error', 'never'],
    //   },
    // },
    eslintPluginPrettierRecommended,
  )
}
