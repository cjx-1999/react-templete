import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TokenService } from 'src/login/token.service';
@Injectable()
export class TokenMiddleware implements NestMiddleware {
  constructor(private readonly tokenService: TokenService) { }
  private readonly secretKey: string = 'your_secret_key_here';

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ state: 401, message: 'token不存在' });
    }

    try {
      const decodedToken = this.tokenService.verifyToken(token);
      req['user'] = decodedToken; // 将解码后的用户信息添加到请求对象中
      next();
    } catch (error) {
      return res.status(401).json({ message: 'token失效了' });
    }
  }
}
