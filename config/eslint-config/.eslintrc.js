import { defineFlatConfig } from 'eslint-define-config';
import baseConfig from './src/base'
export default defineFlatConfig( [
  ...baseConfig
])
