const { defineConfig } = require('eslint-define-config');

export default defineConfig({
  // 环境配置
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  // 解析器配置
  parser: '@typescript-eslint/parser',
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
  // 插件列表
  plugins: ['@typescript-eslint', 'import', 'prettier'],

  // 继承的配置
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/recommended',
    // 'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 配置共享设置
  // settings: {
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  //   },
  //   'import/resolver': {
  //     typescript: {
  //       // alwaysTryTypes: true,
  //     },
  //   },
  // },
  rules: {
    // import 相关规则
    'import/first': 'error', // 强制所有 import 语句在其他语句之前
    'import/newline-after-import': 'error', // 强制 import 语句后必须有空行
    'import/no-duplicates': 'error', // 禁止重复导入模块
    // 一部分文件在导入devDependencies的依赖时不报错
    'import/no-extraneous-dependencies': 0,
    // 模块导入顺序规则
    'import/order': [
      1,
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc', caseInsensitive: false },
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: true,
      },
    ],
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
});
