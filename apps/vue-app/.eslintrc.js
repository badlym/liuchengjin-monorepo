module.exports = {
  root: true,
  extends: ['@strawberry/eslint-config/vue'],
  rules: {
    'class-methods-use-this': 'off', // 禁止类方法中没有使用this
    'no-void': 'off', // 禁止使用void
    'no-undef': 'off',
  },
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
}
