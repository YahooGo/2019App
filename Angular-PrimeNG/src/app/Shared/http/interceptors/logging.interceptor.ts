import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    // 错误处理函数
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // 发生客户端或网络错误。相应的处理。
            console.error('An error occurred:', error.error.message);
        } else {
            // 后端返回一个不成功的响应代码。
            // 反应主体可能包含出了什么问题的线索，
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // 返回一个带有面向用户的错误消息的可观察对象
        return throwError('Something bad happened; please try again later.');
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        // 执行管道 下一步动作， 并在完成后拿到数据 响应体
        // 大多数拦截器都会在外发的请求由 next.handle(transformedReq)
        // 发给拦截器链中的下一个拦截器之前，对该请求进行转换。
        // 拦截器还可以通过为 next.handle() 返回的流添加额外的 RxJS 操作符，
        // 来对响应事件流进行转换。
        return next.handle(req)
            .pipe(
                retry(3), // 失败重复请求3次
                catchError(this.handleError)
            );
    }

}
