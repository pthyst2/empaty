import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newUrl = environment.apiUrl + req.url;
    //const newUrl = environment.testApi + 'pokemon/ditto';
    req = req.clone({
      url: newUrl,
    });
    return next.handle(req).pipe(
      map((event: any) => {
        return event;
      })
    );
  }
}
