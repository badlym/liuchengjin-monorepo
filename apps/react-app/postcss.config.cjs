module.exports = () => {
  return {
    plugins: [
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-nesting'),
      require('tailwindcss'),
      require('postcss-preset-env')({
        autoprefixer: {
          // flexbox: 'no-2009',
        },
        stage: 3,
      }),
    ],
  }
}
