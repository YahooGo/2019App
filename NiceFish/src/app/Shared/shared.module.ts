import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// UI 框架
import { UiModule } from './ui/ui.module';
// 自定义组件
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiModule,
    LayoutModule,
  ],
  exports: [
    UiModule,
    LayoutModule,
  ]
})
export class SharedModule { }
