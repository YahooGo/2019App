import { Component } from '@angular/core';
import { TopMenu, Options } from './Components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';

  TopMenu: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
  ];

  /**
   * 画面制御
   * 滚动导航样式调控
   */
  tabScrollOptions: Options = {
    backgroundColor: 'red',
    titleActiveColor: 'Orange',
    titleColor: '#333',
    indicatorColor: 'green',
  };

  /**
   * 处理滚动导航点击事件
   * @param tabMenu 当前点击滚动导航对象
   */
  handleTabSelected(tabMenu: TopMenu) {
    console.log(tabMenu);
  }
}
