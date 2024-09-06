import { ResponseInterceptor } from '@/interceptor/response.interceptor'
import { NestFactory } from '@nestjs/core'
import * as path from 'node:path'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  // 应用全局拦截器
  app.useGlobalInterceptors(new ResponseInterceptor())
  const ipAddress = '127.0.0.1' // 或者 'localhost'
  await app.listen(3001, ipAddress)
  console.log(`Application is running on: ${await app.getUrl()}`)
}

void bootstrap()
console.log(
  path.dirname(
    '"/Users/liuchengjin/project/zhiguagua/zggmono/frontend/packages/site-saas/src/common/global-model.ts"',
  ),
)
