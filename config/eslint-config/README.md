## eslint命令行说明

```eslint
Basic configuration:
--no-eslintrc                   // 禁用使用 .eslintrc.* 文件中的配置
-c, --config path::String       // 使用指定的配置文件，覆盖 .eslintrc.* 中的配置选项
--env [String]                  // 指定使用的环境
--ext [String]                  // 指定 JavaScript 文件的扩展名
--global [String]               // 定义全局变量
--parser String                 // 指定要使用的解析器
--parser-options Object         // 指定解析器选项
--resolve-plugins-relative-to path::String  // 指定插件解析的基本目录，默认为当前工作目录

Specify rules and plugins:
--plugin [String]               // 指定使用的插件
--rule Object                   // 指定规则
--rulesdir [path::String]       // 从指定目录加载额外的规则。已弃用：请从插件中使用规则

Fix problems:
--fix                           // 自动修复问题
--fix-dry-run                   // 不保存更改的情况下自动修复问题
--fix-type Array                // 指定要应用的修复类型（指令、问题、建议、布局）

Ignore files:
--ignore-path path::String      // 指定忽略文件的路径
--no-ignore                     // 禁用使用忽略文件和模式
--ignore-pattern [String]       // 忽略文件的模式（除了 .eslintignore 中的模式之外）

Use stdin:
--stdin                         // 在 <STDIN> 上进行代码检查 - 默认：false
--stdin-filename String         // 指定 STDIN 处理的文件名

Handle warnings:
--quiet                         // 仅报告错误 - 默认：false
--max-warnings Int              // 触发非零退出代码的警告数量阈值 - 默认：-1

Output:
-o, --output-file path::String  // 指定要写入报告的文件
-f, --format String             // 使用特定的输出格式 - 默认：stylish
--color, --no-color             // 强制启用/禁用颜色

Inline configuration comments:
--no-inline-config              // 防止注释更改配置或规则
--report-unused-disable-directives  // 为未使用的 eslint-disable 指令添加报告的错误

Caching:
--cache                         // 仅检查更改的文件 - 默认：false
--cache-file path::String       // 缓存文件的路径。已弃用：请使用 --cache-location - 默认：.eslintcache
--cache-location path::String   // 缓存文件或目录的路径
--cache-strategy String         // 在缓存中检测更改的文件的策略 - metadata 或 content，默认：metadata

Miscellaneous:
--init                          // 运行配置初始化向导 - 默认：false
--env-info                      // 输出执行环境信息 - 默认：false
--no-error-on-unmatched-pattern  // 在模式不匹配时防止错误
--exit-on-fatal-error           // 在发生致命错误时退出并返回退出码2 - 默认：false
--debug                         // 输出调试信息
-h, --help                      // 显示帮助
-v, --version                   // 输出版本号
--print-config path::String     // 打印给定文件的配置
```
