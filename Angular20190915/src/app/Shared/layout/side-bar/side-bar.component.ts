import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() hideSidebar: boolean;
  @Output() hideSidebarChange = new EventEmitter<boolean>();
  public sidebarItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.sidebarItems = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            url: 'https://www.baidu.com',

          },
          {
            label: 'Open',
            icon: 'pi pi-fw pi-external-link',
            routerLink: ['/login'],
            command: (data) => {
              this.handleSideBarItem(data);
            },

          },
          {
            label: 'Quit',
            icon: 'pi pi-fw pi-times',
            routerLink: ['/home'],
            command: (data) => {
              this.handleSideBarItem(data);
            }
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',

        items: [
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];
  }
  // 弹窗关闭回调事件 通过箭头函数不改变this指向
  handleSideBarItem(data): void {
    console.log(data);
    // this.handleSideBarHiden();
  }

  handleSideBarHiden(): void {
    this.hideSidebarChange.emit();
  }

}
