import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './Barrel';

// 这个 NoopInterceptor 就是一个由 Angular 依赖注入 (DI)系统管理的服务。
// 像其它服务一样，你也必须先提供这个拦截器类，应用才能使用它。

// 由于拦截器是 HttpClient 服务的（可选）依赖，
// 所以你必须在提供 HttpClient 的同一个（或其各级父注入器）注入器中提供这些拦截器。
// 那些在 DI 创建完 HttpClient 之后再提供的拦截器将会被忽略。

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  exports: [
    HttpClientModule
  ]
})
export class HttpModule { }
