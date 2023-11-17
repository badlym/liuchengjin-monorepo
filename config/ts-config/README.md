## base.json

```
{
  // "$schema" 提供了 JSON 文件的模式定义，这里指向 TypeScript 配置文件的模式。
  "$schema": "https://json.schemastore.org/tsconfig",

  // "display" 字段是自定义的，用于描述这个配置文件的用途或名称。
  "display": "Base",

  "compilerOptions": {
    // "target" 指定 ECMAScript 目标版本。"ESNext" 表示最新版本。
    "target": "ESNext",

    // "module" 指定生成哪个模块系统代码。"ESNext" 表示使用最新的模块标准。
    "module": "ESNext",

    // "moduleResolution" 指定模块解析策略。"node" 用于 Node.js 风格的模块解析。
    "moduleResolution": "node",

    // "strict" 启用所有严格的类型检查选项。
    "strict": true,

    // "declaration" 生成相应的 '.d.ts' 声明文件。
    "declaration": true,

    // "noImplicitOverride" 确保子类方法覆盖父类方法时必须使用 'override' 关键字。
    "noImplicitOverride": true,

    // "noUnusedLocals" 报告未使用的局部变量错误。
    "noUnusedLocals": true,

    // "esModuleInterop" 允许导出非模块（非 ES6 模块）。
    "esModuleInterop": true,

    // "useUnknownInCatchVariables" 在 catch 语句中使用 'unknown' 类型的异常变量，而不是 'any'。
    "useUnknownInCatchVariables": false,

    // "composite" 启用项目编译。
    "composite": false,

    // "declarationMap" 为每个生成的声明文件生成一个源映射。
    "declarationMap": true,

    // "forceConsistentCasingInFileNames" 强制文件名的大小写一致性。
    "forceConsistentCasingInFileNames": true,

    // "inlineSources" 将源码嵌入到源映射文件中。
    "inlineSources": false,

    // "isolatedModules" 确保每个文件可以单独编译。
    "isolatedModules": true,

    // "skipLibCheck" 跳过库文件的类型检查。
    "skipLibCheck": true,

    // "noUnusedParameters" 报告未使用的函数参数错误。
    "noUnusedParameters": false,

    // "preserveWatchOutput" 在监视模式下不清除控制台输出。
    "preserveWatchOutput": true,

    // "experimentalDecorators" 启用实验性的装饰器支持。
    "experimentalDecorators": true,

    // "resolveJsonModule" 允许导入 JSON 模块。
    "resolveJsonModule": true,

    // "removeComments" 不从输出文件中删除注释。
    "removeComments": false,

    // "sourceMap" 生成相应的 '.map' 文件，用于调试。
    "sourceMap": true
  },

  // "exclude" 指定编译器应该排除的文件夹。
  "exclude": ["**/node_modules/**", "**/dist/**"]
}

```

## nest.json

```
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Nestjs",
  "extends": "./base.json", // 继承基础配置文件 base.json 的设置
  "compilerOptions": {
    "module": "commonjs", // 使用 CommonJS 模块系统，适用于 Node.js 环境
    "emitDecoratorMetadata": true, // 发出装饰器的元数据，对于使用装饰器的 NestJS 应用很重要
    "allowSyntheticDefaultImports": true, // 允许默认导入没有默认导出的模块
    "target": "ES2021", // 将 TypeScript 编译到 ES2021 标准
    "incremental": true, // 启用增量编译，提高编译速度
    "skipLibCheck": true, // 跳过库文件（.d.ts 文件）的类型检查，加快编译速度
    "strictNullChecks": false, // 关闭严格的 null 检查
    "noImplicitAny": false, // 允许隐式 any 类型
    "strictBindCallApply": false, // 关闭严格的 bind/call/apply 检查
    "forceConsistentCasingInFileNames": false, // 不强制文件名大小写一致性
    "noFallthroughCasesInSwitch": false // 允许 switch 语句中的 case 贯穿
  },
  "include": ["src"], // 包含 src 目录下的文件
  "exclude": ["node_modules"] // 排除 node_modules 目录
}

```
