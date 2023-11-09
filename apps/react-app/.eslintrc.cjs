module.exports = {
  root: true,
  extends: ['@strawberry/eslint-config/react-app'],
  rules: {
    'no-void': 'off',
    'react/jsx-no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'Off',
  },
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
}
