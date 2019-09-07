import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

// 引入共享模块
import { SharedModule } from '../shared.module';
// 引入第三方组件库
import { UiModule } from '../ui/ui.module';

import { WorkSpaceComponent } from './work-space/work-space.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WorkSpaceComponent,
    SideBarComponent
  ],
  imports: [
    SharedModule,
    UiModule,
  ],
  exports: [
    HeaderComponent,
    WorkSpaceComponent,
    SideBarComponent
  ]
})
export class LayoutModule { }
