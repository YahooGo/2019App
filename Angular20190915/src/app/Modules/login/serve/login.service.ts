import { Injectable, Inject } from '@angular/core';



@Injectable()
export class LoginService {
  public baseConfig = '';
  constructor(
    @Inject('APP_CONFIG') appConfig
  ) {
    this.baseConfig = appConfig;
  }

  login() {
    console.log('服务运行正常：', this.baseConfig);
  }

}
