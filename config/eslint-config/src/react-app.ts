import { defineFlatConfig } from 'eslint-define-config';
import baseConfig from './base';
// @ts-ignore
import react from 'eslint-plugin-react';
// @ts-ignore
import reactRecommended from 'eslint-plugin-react/configs/recommended';
// @ts-ignore
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineFlatConfig([
  ...baseConfig,
  reactRecommended,
  {
    plugins: {
      react,
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
]);
