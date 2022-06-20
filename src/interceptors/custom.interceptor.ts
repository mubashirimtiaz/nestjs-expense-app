import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Report } from '../interface';

export class CustomInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('Intercepting request');
    console.log(context);

    return next.handle().pipe(
      map((data: Report) => {
        const response = {
          ...data,
          createdAt: data.created_at,
        };

        delete response.created_at;
        delete response.updated_at;

        return response;
      }),
    );
  }
}
