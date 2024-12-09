import antfu from '@antfu/eslint-config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
//

export default function nestConfig(options) {
  return antfu(
    {
      stylistic: false,
      react: true,
      vue: false,
      typescript: true,
      ...options,
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
            disallowTypeAnnotations: false,
            // 这是关键配置，可以添加需要排除的模块
            exclude: [
              // 排除 NestJS 相关的类
              '@nestjs/**',
              // 排除实体和服务类
              '**/*.entity',
              '**/*.service',
            ],
          },
        ],
      },
    },
    eslintPluginPrettierRecommended,
  );
}
