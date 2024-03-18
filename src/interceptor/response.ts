import { Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface data<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T = any> implements NestInterceptor {
  intercept(context, next: CallHandler<any>): Observable<data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: 200,
        };
      }),
    );
  }
}
