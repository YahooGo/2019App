import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';

import { SignInComponent } from '../blog/user/sign-in/sign-in.component';
import { SignUpComponent } from '../blog/user/sign-up/sign-up.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    PanelModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelMenuModule,
    PanelModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
