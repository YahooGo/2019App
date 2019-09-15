import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {
  public baseConfig = '';
  constructor(
    @Inject('APP_CONFIG') appConfig,
    private http: HttpClient
  ) {
    this.baseConfig = appConfig;
  }

  // 登录接口
  login(): Observable<any> {
    const API_GET_USER = `${this.baseConfig}/user`;
    console.log('请求地址=>', API_GET_USER);
    return this.http.get(API_GET_USER);
  }

}
