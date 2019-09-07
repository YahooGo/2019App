import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modules/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./Modules/login/login.module').then(mod => mod.LoginModule),
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
