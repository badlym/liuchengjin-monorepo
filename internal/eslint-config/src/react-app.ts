module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    '@strawberry/eslint-config/base-ts',
    '@unocss',
  ],
  plugins: ['react-refresh'],
  rules: {
    'class-methods-use-this': 'off', // 允许类方法不使用this
    'import/no-absolute-path': 'off', // 允许绝对路径导入
    'no-param-reassign': ['error', { props: false }], // 允许修改函数参数的属性
    'no-console': ['error', { allow: ['warn', 'error'] }], // 允许使用 console.warn 和 console.error
    'import/no-cycle': 'off', // 允许循环导入
    'import/prefer-default-export': 'off', // 允许导出单个变量
    /* ********************************** React and Hooks ********************************** */
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
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
