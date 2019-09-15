import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
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

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'X-CustomAuthHeader': 'my-auth-token'
            })
        };

        // 克隆请求体进行头部配置
        const clonedRequest = req.clone({
            // 单个属性写入设置
            // headers: req.headers.set('X-CustomAuthHeader', 'token')
            headers: httpOptions.headers
        });

        console.log('new headers', clonedRequest.headers.keys());
        return next.handle(clonedRequest);
    }

}
