export const customCssModulesSupport = () => {
  return {
    name: 'vite-plugin-m-less',
    enforce: 'pre', // 确保插件在其他插件之前运行
    transform(code, id) {
      if (id.endsWith('.m.less')) {
        // 将 .m.less 文件标记为 CSS Modules
        id = id.replace(/\.m\.less$/, '.module.less')
      }
      return code
    },
    resolveId(source) {
      // 将 .m.less 文件的路径转换为 .module.less
      if (source.endsWith('.m.less')) {
        return source.replace(/\.m\.less$/, '.module.less')
      }
      return null // 返回 null 表示让 Vite 继续处理
    },
  }
}
