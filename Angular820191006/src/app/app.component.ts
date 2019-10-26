import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TopMenu, Options, ImageSlider, ImageSliderComponent } from './Components';
import { interval } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'App';

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

  createO() {
    const d$ = interval(1000);
    const b$ = d$.pipe(
      startWith(5),
      scan(time => time - 1)
    );
    b$.subscribe(item => console.log(item));
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.createO();

  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    console.log('组件轮播图', this.imageSlider);
  }
}
