import { Global, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Global()
@Injectable()
export class TokenService {
  private readonly secretKey: string = 'cjx-nestjs';
  private readonly expiresIn: string = '1h'; // 过期时间设置为1小时，可以根据需求进行调整

  generateToken(payload: any): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn });
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
