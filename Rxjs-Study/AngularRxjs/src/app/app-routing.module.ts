import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day1Component } from './days/day1/day1.component';


const routes: Routes = [
  { path: '', redirectTo: 'day1', pathMatch: 'full' },
  { path: 'day1', component: Day1Component },
  { path: '**', redirectTo: 'day1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
