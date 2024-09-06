import { log } from "console";
import fs from "fs";
import * as path from "node:path";

// 获取当前请求文件所在app路径的函数
const getAppPath = async (dir, appPath) => {
  const testPath = path.join(dir, "tsconfig.json");
  const hasTsConfig = fs.existsSync(testPath);
  if (hasTsConfig) {
    return dir;
  } else if (dir === path.parse(dir).root) {
    return appPath ?? "";
  } else {
    const pDir = path.resolve(dir, "..");
    return getAppPath(pDir, appPath);
  }
};

// 检查文件是否存在并支持多个扩展名
const checkFileExists = (basePath) => {
  const extensions = [".ts", ".js", ".tsx", ".jsx"];
  for (const ext of extensions) {
    const fullPath = `${basePath}${ext}`;
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }
  return null;
};

// Vite 插件
const resolveSrcAliasPlugin = ({ appPath }) => {
  return {
    name: "vite-plugin-resolve-src-alias",
    async resolveId(source, importer) {
      // console.log(source,importer)
      if (!source || !importer) {
        return null;
      }
      try {
        // 请求的路径
        const requestPath = path.normalize(source);

        if(requestPath.endsWith('.vanilla.js')){

          return  requestPath

        }

        console.log("requestPath", requestPath);
        const requestDir = path.dirname(importer);
        // 解析请求路径
        const requestPathParts = requestPath.split(path.sep);
        const srcIndex = requestPathParts.indexOf("src");

        if (srcIndex !== -1) {
          const relativeRequestPath = requestPathParts
            .slice(srcIndex)
            .join(path.sep);

          const appDir = await getAppPath(requestDir, appPath);

          const newPath = path.join(appDir, relativeRequestPath);
          console.log(newPath,'newPath')

          // if (newPath.endsWith(".vanilla.js")) {
          //   return newPath;
          // }

          const resolvedPath = checkFileExists(newPath);
          if (resolvedPath) {
            return resolvedPath;
          }
        }
      } catch (error) {
        console.error("Error in resolveSrcAliasPlugin:", error);
      }

      return null; // 继续使用默认的解析
    },
  };
};

export default resolveSrcAliasPlugin;
