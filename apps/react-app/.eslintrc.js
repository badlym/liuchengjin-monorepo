module.exports = {
  root: true,
  extends: ['@strawberry/eslint-config/react-app'],
  rules: {
    'no-void': 'off',
    'react/jsx-no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'Off',
    'global-require': 'off',
    'no-console': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
  },
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
}
