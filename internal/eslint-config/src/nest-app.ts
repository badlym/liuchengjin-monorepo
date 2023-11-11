export default {
  extends: [
    // airbnb规范
    // https://www.npmjs.com/package/eslint-config-airbnb-base
    'airbnb-base',
    // 兼容typescript的airbnb规范
    // https://github.com/iamturns/eslint-config-airbnb-typescript
    'airbnb-typescript/base',
    '@strawberry/eslint-config/base-ts',
  ],
  rules: {
    'import/prefer-default-export': 'off', // 允许导出单个变量
    'class-methods-use-this': 'off', // 允许类方法不使用this
    'import/no-cycle': 'off', // 允许循环引用
    'no-param-reassign': 'off', // 允许修改函数参数
  },
}
