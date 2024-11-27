// Vite 插件
const resolveSrcAliasPlugin = ({ appPath }) => {
  return {
    name: 'vite-plugin-resolve-src-alias',
    async resolveId(source, importer) {
      console.log(source, 'source');
      console.log(importer, 'importer');
      if (!source || !importer) {
        return null;
      }

      return null; // 继续使用默认的解析
    },
  };
};

export default resolveSrcAliasPlugin;
