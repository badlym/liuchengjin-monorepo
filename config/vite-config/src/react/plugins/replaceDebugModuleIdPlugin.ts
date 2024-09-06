export default function replaceDebugModuleIdPlugin(): Plugin {
  return {
    name: "vite-plugin-replace-debug-module-id",
    transform(code: string, id: string) {
      // 匹配并替换代码中的 `const debug = Debug(module.id);`
      const transformedCode = code.replace(
        /const\s+debug\s*=\s*Debug\(module\.id\);/g,
        `
const isVite = typeof import.meta.env !== 'undefined';
let debugId = '';
if (isVite) {
  debugId = import.meta.url;
} else {
  debugId = typeof module !== 'undefined' ? module.id : '';
}
const debug = Debug(debugId);
        `,
      );

      // 返回替换后的代码
      return {
        code: transformedCode,
        map: null, // 如果需要，可以生成 source map
      };
    },
  };
}
