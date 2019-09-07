import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    UiModule
  ],
  exports: [
    HeaderComponent,

  ]
})
export class LayoutModule { }
