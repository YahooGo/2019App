import { Component, OnInit } from '@angular/core';
interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
export class ScrollableTabComponent implements OnInit {
  public selectIndex = -1;

  public menus: TopMenu[] = [
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
  constructor() { }

  ngOnInit() {
  }


  public handleSelection(index: number) {
    this.selectIndex = index;
  }
}
