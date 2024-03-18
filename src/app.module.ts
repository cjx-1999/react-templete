import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { TokenMiddleware } from './middleware/tokenMiddleware';
import { HomeModule } from './home/home.module';
@Module({
  imports: [LoginModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    //  exclude 设置某些路由不需要检测
    consumer
      .apply(TokenMiddleware)
      .exclude(
        { path: '/login', method: RequestMethod.POST },
        { path: 'public/*', method: RequestMethod.ALL },
      )
      .forRoutes('*');
  }
}
