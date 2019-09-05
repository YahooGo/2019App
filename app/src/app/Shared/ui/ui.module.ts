import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// UI
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
  ]
})
export class UIModule { }
