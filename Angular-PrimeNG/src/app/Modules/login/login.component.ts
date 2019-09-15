import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoginService } from './serve/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public imgWidth = 0;
  public imgHeight = 0;
  public moveLeft = 0 + 'px';
  public imgUrl = 'https://images.pexels.com/photos/2871860/pexels-photo-2871860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  public window$: any = null;

  // 用户登录信息
  public loginInfo = {
    username: '',
    password: ''
  };
  public checkForm = false;
  public username = '';
  public password = '';


  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.init();

    // 设置监听窗口
    this.handleScreen();
  }

  // 页面数据初始化
  init() {
    this.imgWidth = document.body.clientWidth;
    this.imgHeight = document.body.clientHeight;
  }

  // FIXME:监听屏幕尺寸 此处应该复用 最好办法未想出
  handleScreen(): void {
    // 页面监听
    this.window$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(300)
      )
      .subscribe((event) => {
        // 这里处理页面变化时的操作
        console.log('监听window可用窗口');

        this.imgWidth = document.body.clientWidth;
        this.imgHeight = document.body.clientHeight;

        console.log('screenObj=>', {
          screenHeight: this.imgHeight,
          screenWidth: this.imgWidth
        });

      });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.window$.unsubscribe();
  }


  btnClick() {
    // 服务
  }

  // 提交登录数据
  onSubmit(data): void {
    // console.log('表单信息=》', data.form.value);
    // console.log('表单对象=》', data);

    this.checkForm = true;
    this.loginService.login();
  }



}


//  TODO 需要设置form 表单验证、 需要一个服务负责登录功能数据交互
