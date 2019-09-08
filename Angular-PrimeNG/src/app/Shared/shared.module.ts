import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from './http/http.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    CommonModule,
    HttpModule
  ]
})
export class SharedModule { }
