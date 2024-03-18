import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { TokenService } from './token.service';
import { LoginController } from './login.controller';

@Module({
  controllers: [LoginController],
  providers: [LoginService, TokenService],
  exports: [TokenService],
})
export class LoginModule {}
