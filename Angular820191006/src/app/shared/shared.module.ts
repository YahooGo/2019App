import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent
} from './Components';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
