module.exports = {
  root: true, // ESLint配置的根目录
  env: { browser: true, es2020: true }, // 指定代码运行的环境
  extends: [
    '@liuchengjin/eslint-config/base-ts', // 使用liuchengjin基本的TypeScript配置
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser', // 指定TypeScript解析器
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    createDefaultProgram: false,
  },
  plugins: ['react-refresh', 'react', 'react-hooks'], // 使用react-refresh插件
  rules: {
    /* ********************************** React and Hooks ********************************** */
    'react/jsx-uses-react': 1, // 检查是否使用了React
    'react/jsx-uses-vars': 1, // 检查是否使用了React组件中定义的变量
    'react/jsx-no-useless-fragment': 0, // 禁止使用无用的Fragment
    'react/display-name': 0, // 禁止在React组件中使用displayName
    'react/button-has-type': 0, // 检查button元素是否有明确的type属性
    'react/prop-types': 0, // 禁止使用PropTypes
    'react/jsx-props-no-spreading': 0, // 允许使用...扩展props
    'react/destructuring-assignment': 0, // 允许在对象和数组上使用解构赋值
    'react/static-property-placement': 0, // 允许在class组件中定义静态属性
    'react/react-in-jsx-scope': 0, // 允许在jsx中不引入React即可使用
    'react/require-default-props': 0, // 允许组件的prop不设置默认值
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }], // 限制jsx文件的扩展名为.jsx和.tsx
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ], // 强制使用函数组件定义
    'react-hooks/exhaustive-deps': 0, // 允许不检查useEffect和useMemo的依赖项
    'react-refresh/only-export-components': 0, // 允许未导出的组件使用react-refresh
    /* ********************************** jax-a11y ********************************** */
    'jsx-a11y/anchor-is-valid': 0, // 允许无效的锚链接
    'jsx-a11y/no-static-element-interactions': 0, // 允许静态元素有交互事件
    'jsx-a11y/click-events-have-key-events': 0, // 允许click事件没有对应的key事件
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ], // 要求label与控件关联
  },
}
