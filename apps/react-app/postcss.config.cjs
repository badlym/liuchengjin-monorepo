module.exports = (ctx) => {
  return {
    plugins: [
      require('@unocss/postcss'),
      require('postcss-import'),
      require('postcss-nesting'),
      require('postcss-mixins'),
      // require('@minko-fe/postcss-pxtorem')({
      //   rootValue: 192,
      // }),
      require('autoprefixer'),
    ],
  }
}
