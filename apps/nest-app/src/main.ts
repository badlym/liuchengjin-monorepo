import { NestFactory } from '@nestjs/core'

import { ResponseInterceptor } from '@/interceptor/response.interceptor'

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
