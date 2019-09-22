import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('MenuBtn', { static: false }) MenuBtn: ElementRef;
  public MenuShow = false;
  public PageConfig = false;
  public MenuData: MenuItem[];


  constructor() { }

  ngOnInit() {
    this.MenuData = [
      {
        label: 'sign',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'SignIn', icon: 'pi pi-fw pi-trash', routerLink: ['/login'], command: () => {
              this.MenuShow = !this.MenuShow;
            }
          },
          {
            label: 'SignUp', icon: 'pi pi-fw pi-refresh', routerLink: ['/logout'], command: () => {
              this.MenuShow = !this.MenuShow;
            }
          }
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
  }

  onMenuToggle(ev): void {
    ev.stopPropagation();
    this.MenuShow = !this.MenuShow;
  }

  onPageConfigChange(ev): void {
    ev.stopPropagation();
    this.PageConfig = !this.PageConfig;
  }

}
