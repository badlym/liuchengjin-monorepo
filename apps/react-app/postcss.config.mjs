export default async  () => {
  return {
    plugins: [
      await import('postcss-import'),
      await import('postcss-mixins'),
      await import('@unocss/postcss'),
     await import('postcss-nesting'),
      // require('@minko-fe/postcss-pxtorem')({
      //   rootValue: 192,
      // }),
     await import('autoprefixer'),

    ],
  }
}
