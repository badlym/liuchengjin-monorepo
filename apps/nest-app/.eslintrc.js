module.exports = {
  root: true,
  extends: ['@liuchengjin/eslint-config/nest-app'],
  rules: {
    'no-void': 'off',
    '@typescript-eslint/no-explicit-any': 'Off',
    'global-require': 'off',
    'no-console': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
  },
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json', './tsconfig.build.json'],
  },
}
