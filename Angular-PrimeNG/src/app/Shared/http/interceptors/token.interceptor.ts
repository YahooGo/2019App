import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    // intercept(req: HttpRequest<any>, next: HttpHandler):
    //     Observable<HttpEvent<any>> {
    //     return next.handle(req);
    // }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        // 克隆请求体进行头部配置
        const clonedRequest = req.clone({
            headers: req.headers.set('X-CustomAuthHeader', 'token')
        });

        console.log('new headers', clonedRequest.headers.keys());
        return next.handle(clonedRequest);
    }

}
