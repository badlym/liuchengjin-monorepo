export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  // 使用 postcss-html 作为自定义语法解析器
  // customSyntax: 'postcss-html',
  overrides: [
    // 对于后缀名为 .css、.html、.vue 的文件，使用 postcss-html 自定义语法解析器
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
    },
    // 对于后缀名为 .less 的文件，使用 postcss-less 自定义语法解析器
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      // 扩展其他配置，适用于 Less 文件
      extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],
    },
    // 对于后缀名为 .scss 的文件，使用 postcss-scss 自定义语法解析器
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      // 扩展其他配置，适用于 Sass/SCSS 文件
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
      // 忽略某个特定的规则
      rule: {
        'scss/percent-placeholder-pattern': null,
      },
    },
  ],
  rules: {
    // 设置 media 特性范围的记法为前缀形式
    'media-feature-range-notation': 'prefix',
    // 允许使用不规范的选择器记法
    'selector-not-notation': null,
    // 允许使用不规范的导入语法
    'import-notation': null,
    // 允许使用未知的函数
    'function-no-unknown': null,
    // 允许使用不规范的类选择器命名规则
    'selector-class-pattern': null,
    // 允许使用未知的伪类选择器，但忽略 global 和 deep 伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
    // 允许使用未知的伪元素选择器，但忽略 v-deep 伪元素
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 允许使用自定义的未知规则，如 Tailwind CSS 的规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
        ],
      },
    ],
    // 允许空的样式源文件
    'no-empty-source': null,
    // 允许使用单引号或双引号的字符串
    'string-quotes': null,
    // 允许使用命名网格区域名称的无效命名规则
    'named-grid-areas-no-invalid': null,
    // 允许使用降序优先级的样式规则
    'no-descending-specificity': null,
    // 允许字体中缺少通用字体关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 在规则前要求空行，但忽略注释和嵌套规则的首行
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    // 允许使用未知的单位，但忽略 rpx 单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 设置规则和声明的排序顺序
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'error' },
    ],
  },
  // 忽略特定后缀名的文件
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
