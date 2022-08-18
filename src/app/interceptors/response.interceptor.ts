import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    /*let newReq = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
      },
    });*/
    return next.handle(req).pipe(
      map((event: any) => {
        return event;
      })
    );
  }
}
