export default {
  // 环境配置
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  // 解析器配置
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: 'react',
    },
    project: './tsconfig.*?.json',
    createDefaultProgram: false,
    extraFileExtensions: ['.vue'],
  },

  // 插件列表
  plugins: ['vue'],

  // 继承的配置
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    // 兼容typescript的airbnb规范
    // https://github.com/iamturns/eslint-config-airbnb-typescript
    'airbnb-typescript/base',
    '@liuchengjin/eslint-config/base-ts',
    '@unocss',
  ],

  // 规则配置
  rules: {
    'no-param-reassign': ['error', { props: false }], // 允许修改函数参数的属性
    'no-console': ['error', { allow: ['warn', 'error'] }], // 允许使用 console.warn 和 console.error
    'import/no-absolute-path': 'off', // 允许绝对路径导入
    'import/no-cycle': 'off', // 允许循环导入
    'import/prefer-default-export': 'off', // 允许导出单个变量
    // Vue 相关规则
    'vue/no-setup-props-destructure': 'off', // 允许在 `<script setup>` 中使用解构
    'vue/script-setup-uses-vars': 'error', // 确保 `<script setup>` 中使用的变量都在 `<script>` 中声明
    'vue/no-reserved-component-names': 'off', // 允许使用保留的组件名
    'vue/custom-event-name-casing': 'off', // 允许自定义事件名称不符合规范
    'vue/attributes-order': 'off', // 允许不按顺序定义组件属性
    'vue/one-component-per-file': 'off', // 允许一个文件中包含多个组件
    'vue/html-closing-bracket-newline': 'off', // 允许 HTML 标签的闭合括号在新行
    'vue/max-attributes-per-line': 'off', // 允许每行多个属性
    'vue/multiline-html-element-content-newline': 'off', // 允许多行 HTML 元素内容
    'vue/singleline-html-element-content-newline': 'off', // 允许单行 HTML 元素内容
    'vue/attribute-hyphenation': 'off', // 允许属性使用连字符命名
    'vue/require-default-prop': 'off', // 允许不要求有默认的 prop 值
    'vue/require-explicit-emits': 'off', // 允许不要求显式声明 emits 属性
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // 要求空元素自闭合
          normal: 'never', // 不要求普通元素自闭合
          component: 'always', // 要求组件元素自闭合
        },
        svg: 'always', // 要求 svg 元素自闭合
        math: 'always', // 要求 math 元素自闭合
      },
    ],
    'vue/multi-word-component-names': 'off', // 允许组件名称不使用多个单词

    // 其他规则
    // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: true,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    //     allowSeparatedGroups: false,
    //   },
    // ],
  },

  // 全局变量
  globals: { defineOptions: 'readonly' },
}
