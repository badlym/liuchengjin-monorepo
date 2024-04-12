export default {
  root: true,
  extends: ['@liuchengjin/eslint-config/simple-base', 'plugin:react-hooks/recommended'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
