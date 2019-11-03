import { Component, OnInit, ViewChild, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TopMenu, Options, ImageSlider, ImageSliderComponent, Channel } from '../../../shared/Components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit, AfterViewInit {

  channels: Channel[] = [
    {
      title: '百度',
      alt: '百度icon',
      id: 1,
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度2',
      id: 2,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',

    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    },
    {
      title: '百度3',
      id: 3,
      alt: '百度icon',
      link: 'www.baidu.com',
      icon: 'https://angular.cn/assets/images/logos/angular/shield-large.svg',
    }
  ];

  // @ViewChild('ImageSlider', { static: false }) imageSlider: ImageSliderComponent;
  @ViewChild(ImageSliderComponent, { static: false }) imageSlider: ImageSliderComponent;

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
   * 轮播图图片数组
   */
  imageSliders: ImageSlider[] = [
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=2551121849,3276036345&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=3099443564,3000777564&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img1.imgtn.bdimg.com/it/u=281639794,1295715339&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=2551121849,3276036345&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img4.imgtn.bdimg.com/it/u=3099443564,3000777564&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    },
    {
      imageUrl: 'http://img1.imgtn.bdimg.com/it/u=281639794,1295715339&fm=26&gp=0.jpg',
      link: '',
      caption: '五更琉璃',
    }
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

  username: string = '';

  constructor() { }

  /**
   * 处理滚动导航点击事件
   * @param tabMenu 当前点击滚动导航对象
   */
  handleTabSelected(tabMenu: TopMenu) {
    console.log(tabMenu);
  }

  handleChange() {
    this.tabScrollOptions = {
      backgroundColor: 'yellow',
      titleActiveColor: 'green',

    };
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.createO();

  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    // console.log('组件轮播图', this.imageSlider);
  }
}
