import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [

  ]
  ,
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
  ],
})
export class UserModule { }