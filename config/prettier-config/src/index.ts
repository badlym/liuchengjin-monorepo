export default {
  // 设置每行代码的最大宽度
  printWidth: 100,
  // 是否在语句末尾使用分号
  semi: false,
  // 是否缩进 Vue 文件中的脚本和样式标签
  vueIndentScriptAndStyle: true,
  // 是否使用单引号而不是双引号
  singleQuote: true,
  // 对象或数组的最后一个元素后面是否加逗号
  trailingComma: 'all',
  // 是否禁止换行符修饰文本段落
  proseWrap: 'never',
  // HTML 空白敏感度
  htmlWhitespaceSensitivity: 'strict',
  // 换行符的类型，自动检测
  endOfLine: 'auto',
  // 使用的插件
  plugins: ['prettier-plugin-packagejson'],
  // 针对特定文件的配置覆盖
  overrides: [
    {
      // 匹配以 .*rc 结尾的文件
      files: '.*rc',
      options: {
        // 使用 JSON 解析器解析
        parser: 'json',
      },
    },
  ],
}
