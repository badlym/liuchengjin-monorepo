const { defineConfig } = require('eslint-define-config')

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
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.*?.json',
    createDefaultProgram: false,
  },
  // 插件列表
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'prettier'],

  // 继承的配置
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 配置共享设置
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // 禁用规则
    'no-unused-vars': 'off', // 允许未使用的变量，由 TypeScript 规则 @typescript-eslint/no-unused-vars 接管
    'no-case-declarations': 'off', // 允许在 case 子句中使用声明，由 TypeScript 规则 @typescript-eslint/no-case-declarations 接管
    'no-use-before-define': 'off', // 允许在定义之前使用变量，由 TypeScript 规则 @typescript-eslint/no-use-before-define 接管
    'space-before-function-paren': 'off', // 允许函数参数列表的空格，由 Prettier 接管
    'no-bitwise': 'off', // 允许位运算
    // import 相关规则
    'import/first': 'error', // 强制所有 import 语句在其他语句之前
    'import/newline-after-import': 'error', // 强制 import 语句后必须有空行
    'import/no-duplicates': 'error', // 禁止重复导入模块
    /* ********************************** Typescript ********************************** */
    // TypeScript 相关规则
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_', // 允许忽略以 _ 开头的参数
        varsIgnorePattern: '^_', // 允许忽略以 _ 开头的变量
      },
    ],

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
    // 自动删除未使用的导入
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 1,
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    // '@typescript-eslint/no-empty-interface': 0, // 允许空接口声明
    // '@typescript-eslint/no-this-alias': 0, // 允许使用 this 别名
    // '@typescript-eslint/explicit-member-accessibility': 0, // 允许类成员显式可访问性修饰符
    // '@typescript-eslint/no-unnecessary-type-assertion': 0, // 允许不必要的类型断言
    // '@typescript-eslint/require-await': 0, // 允许在异步函数中没有使用 await
    // '@typescript-eslint/no-for-in-array': 0, // 允许 for...in 循环遍历数组
    // '@typescript-eslint/interface-name-prefix': 0, // 允许接口名以 I 开头
    // '@typescript-eslint/no-floating-promises': 0, // 允许未处理的 Promise 对象
    // '@typescript-eslint/restrict-template-expressions': 0, // 允许未限制模板表达式
    '@typescript-eslint/no-unsafe-assignment': 0, // 允许不安全的赋值
    '@typescript-eslint/no-unsafe-return': 0, // 允许不安全的返回值
    // '@typescript-eslint/no-unused-expressions': 0, // 允许未使用的表达式
    // '@typescript-eslint/no-misused-promises': 0, // 允许错误使用 Promise 对象
    '@typescript-eslint/no-unsafe-member-access': 0, // 允许不安全的成员访问
    '@typescript-eslint/no-unsafe-call': 0, // 允许不安全的函数调用
    '@typescript-eslint/no-unsafe-argument': 0, // 允许不安全的参数传递
    // 'no-redundant-type-constituents': 0, // 允许不要求类型声明重复
    '@typescript-eslint/ban-ts-ignore': 'off', // 允许使用 @ts-ignore 注释
    '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 @ts-comment 注释
    '@typescript-eslint/ban-types': 'off', // 允许使用禁止的类型，由 TypeScript 规则 @typescript-eslint/ban-types 接管
    '@typescript-eslint/explicit-function-return-type': 'off', // 允许函数返回类型不显式声明，由 TypeScript 规则 @typescript-eslint/explicit-function-return-type 接管
    '@typescript-eslint/no-var-requires': 'off', // 允许使用 require()，由 TypeScript 规则 @typescript-eslint/no-var-requires 接管
    '@typescript-eslint/no-empty-function': 'off', // 允许空函数，由 TypeScript 规则 @typescript-eslint/no-empty-function 接管
    '@typescript-eslint/no-use-before-define': 'off', // 允许在定义之前使用变量，由 TypeScript 规则 @typescript-eslint/no-use-before-define 接管
    '@typescript-eslint/no-non-null-assertion': 'off', // 允许非空断言，由 TypeScript 规则 @typescript-eslint/no-non-null-assertion 接管
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许未显式声明导出函数的返回类型，由 TypeScript 规则 @typescript-eslint/explicit-module-boundary-types 接管
    // '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 类型，由 TypeScript 规则 @typescript-eslint/no-explicit-any 接管
  },
})
