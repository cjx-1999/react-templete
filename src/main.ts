import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 响应拦截器
import { ResponseInterceptor } from './interceptor/response';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //启用跨域
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
