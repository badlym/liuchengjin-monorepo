module.exports = {
  root: true,
  extends: ['@liuchengjin/eslint-config/vue'],
  rules: {
    'class-methods-use-this': 'off', // 禁止类方法中没有使用this
    'no-void': 'off', // 禁止使用void
    // 'no-undef': 'off', // 禁止使用未定义的变量
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用any
    'no-console': 'off', // 关闭禁止使用console
  },
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
}
