import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { TokenService } from './token.service';
@Injectable()
export class LoginService {
  constructor(private readonly tokenService: TokenService) {}
  create(createLoginDto: CreateLoginDto) {
    const { username, password } = createLoginDto;
    if (username == 'admin' && password == '123456') {
      const token = this.tokenService.generateToken({ username, password });
      return { token, msg: '登录成功' };
    } else if (username != 'admin') {
      return '用户名错误';
    } else if (password != '123456') {
      return '密码错误';
    }
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
