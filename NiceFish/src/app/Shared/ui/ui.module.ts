import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ButtonModule,
    MenuModule,
    PanelMenuModule,
    CardModule,
    ScrollPanelModule,
    SidebarModule,
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    MenuModule,
    PanelMenuModule,
    CardModule,
    ScrollPanelModule,
    SidebarModule,
  ]
})
export class UiModule { }
