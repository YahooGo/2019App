import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SignInComponent } from './blog/user/sign-in/sign-in.component';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'link',
    component: HomeComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'logout',
    component: SignUpComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
