import { defineFlatConfig } from 'eslint-define-config';
import globals from 'globals';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default defineFlatConfig(
  // @ts-ignore
  tseslint.config(
    eslint.configs.recommended,
    eslintConfigPrettier,
    {
      languageOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.browser,
          myCustomGlobal: 'readonly',
        },
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          jsxPragma: 'React',
          ecmaFeatures: {
            jsx: true,
          },
          project: './tsconfig.*?.json',
          createDefaultProgram: false,
        },
      },
      rules: {
        '@typescript-eslint/ban-ts-ignore': 'off', // 允许使用 @ts-ignore
        '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 @ts-comment
        '@typescript-eslint/ban-types': 'off', // 允许使用 object
        '@typescript-eslint/explicit-function-return-type': 'off', // 允许不写函数返回值类型
        '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any
        '@typescript-eslint/no-var-requires': 'off', // 允许使用 require
        '@typescript-eslint/no-empty-function': 'off', // 允许空函数
        '@typescript-eslint/no-use-before-define': 'off', // 允许在定义之前使用变量
        '@typescript-eslint/no-non-null-assertion': 'off', // 允许使用 ! 断言
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许不写函数返回值类型
      },
    },
    {
      ignores: ['**/temp.js', 'config/*'],
    },
  ),
);
