import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// 引入 组件
import { LayoutModule } from '../../Shared/layout/layout.module';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
