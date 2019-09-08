import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public hideSidebar = false;
  constructor() { }

  ngOnInit() {
  }


  SidebarStatusChange(): void {
    this.hideSidebar = !this.hideSidebar;
  }
}
