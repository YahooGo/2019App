import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, pipe } from 'rxjs';
import { tap, retry } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userLoginUrl = environment.userLoginUrl;
  public subject: Subject<any> = new Subject<any>();

  constructor(
    private http: HttpClient,
  ) { }

  public login2(options) {
    console.log(options);
    return this.http
      .post(this.userLoginUrl, options)
      .subscribe(
        data => {
          // 数据获取
          console.log('user success -> ', data);
          const user = data;
          console.log('user object -> ', user);
          // 本地缓存
          localStorage.setItem('currentUser', JSON.stringify(user));

          this.subject.next(Object.assign({}, user));
        },
        err => {
          console.log(err);
        }
      );
  }

  public login(options) {
    console.log(options);
    return this.http
      .get(this.userLoginUrl)
      .subscribe(
        data => {
          // 数据获取
          console.log('user success -> ', data);
          const user = data;
          console.log('user object -> ', user);
          // 本地缓存
          localStorage.setItem('currentUser', JSON.stringify(user));

          // return 数据
          this.subject.next(Object.assign({}, user));
        },
        err => {
          console.log(err);
        }
      );
  }


  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }








}
