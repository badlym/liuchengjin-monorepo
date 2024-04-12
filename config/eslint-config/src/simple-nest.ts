export default {
  extends: ['@liuchengjin/eslint-config/simple-base'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // 允许接口名称以I开头
    '@typescript-eslint/explicit-function-return-type': 'off', // 允许函数不声明返回类型
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许函数不声明返回类型
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用any
  },
};
