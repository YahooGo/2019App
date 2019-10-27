import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoki, confirmable } from '../../Decorators';

export interface Channel {
  title: string;
  id: number;
  link: string;
  icon: string;
  alt?: string;
}


@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.scss']
})
export class HorizontalGridComponent implements OnInit {

  /**
   * 自定义装饰器
   */
  @Emoki() result: string = 'www';

  private UserName: string = '';
  /**
   * ## get/set 属性存取 做各种变换
   * 1. 私有化UserName变量
   * 2. 设置对外暴露的属性(读写可控)
   * 3. 增加`@Input()`标识 表示输入型变量
   */
  @Input()
  public get username(): string {
    return this.UserName;
  }
  public set username(value: string) {
    this.UserName = value;
    // 表示写入后需要同步将事件发射出去
    this.usernameChange.emit(value);
  }
  /**
   * 增加导出标识符 表示这是个事件发射器
   */
  @Output()
  usernameChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  @confirmable('点击执行message')
  handleClick() {
    console.log('点击执行');
  }

}
