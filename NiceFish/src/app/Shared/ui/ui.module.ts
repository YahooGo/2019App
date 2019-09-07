import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ButtonModule,

  ],
  exports: [
    MenubarModule,
    ButtonModule
  ],
})
export class UiModule { }
