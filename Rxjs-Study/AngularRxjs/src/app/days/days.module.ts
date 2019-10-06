import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day1Component } from './day1/day1.component';



@NgModule({
  declarations: [Day1Component],
  imports: [
    CommonModule
  ],
  exports: [Day1Component]
})
export class DaysModule { }
