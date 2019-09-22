import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    SidebarModule,
  ],
  exports: [
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    SidebarModule,
  ]
})
export class SharedModule { }
