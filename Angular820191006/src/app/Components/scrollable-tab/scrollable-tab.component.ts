import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
export interface TopMenu {
  title: string;
  link?: string;
}
export interface Options {
  backgroundColor?: string;
  titleActiveColor?: string;
  titleColor?: string;
  indicatorColor?: string;
}
@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit, OnChanges {
  // 初始化导航选中序号
  public selectIndex = -1;
  // 初始化默认导航样式
  tabOpt: Options = {
    backgroundColor: '#fff',
    titleActiveColor: 'Orange',
    titleColor: '#333',
    indicatorColor: 'green',
  };

  // 数据传入
  @Input() menus: TopMenu[] = [];
  // @Input() backgroundColor = `#fff`;
  // @Input() titleActiveColor = 'yellow';
  // @Input() titleColor = '#333';
  // @Input() indicatorColor = '#333';
  @Input() Options: Options = {
    backgroundColor: '#fff',
    titleActiveColor: 'yellow',
    titleColor: '#333',
    indicatorColor: '#333',
  };
  // 事件发射器
  @Output() tabSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // 监听传入 数据是否改变 改变则触发
    console.log(1);
    this.tabOpt = Object.assign(this.tabOpt, this.Options);
  }
  /**
   * 处理滚动导航被选中
   * @param index 被选中的导航数组序号
   */
  public handleSelection(index: number) {
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }
}
