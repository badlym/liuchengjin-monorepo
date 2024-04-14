module.exports = {
  root: true,
  extends: ['@liuchengjin/eslint-config/simple-react'],
  rules: {
    // 'no-void': 'off',
    // 'react/jsx-no-undef': 'off',
    // '@typescript-eslint/no-explicit-any': 'Off',
    // 'global-require': 'off',
    // 'no-console': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
  },
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
}
