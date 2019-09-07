import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() SidebarStatusChange = new EventEmitter<boolean>();

  NavItems: MenuItem[];
  UserMenu: MenuItem[];

  public status = true;
  public myHeaderIcon = {};

  constructor() { }

  ngOnInit() {
    this.NavItems = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];

    this.UserMenu = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];

    // 初始化按钮状态
    this.setSidebarStatus();
  }

  changeSidebarStatus(): void {
    this.status = !this.status;
    this.setSidebarStatus();
    this.SidebarStatusChange.emit();
  }

  setSidebarStatus(): void {
    // CSS classes: added/removed per current state of component properties
    this.myHeaderIcon = {
      'pi-align-right': !this.status,
      'pi-align-left': this.status
    };
  }


}
