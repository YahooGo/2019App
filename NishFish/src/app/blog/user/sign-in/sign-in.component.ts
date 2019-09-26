import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { fadeIn } from '../../../shared/animations/fadeIn';
import { flyIn } from '../../../shared/animations/flyIn';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [fadeIn, flyIn]
})
export class SignInComponent implements OnInit {

  public userInfo: any = {
    username: '',
    password: '',
    email: '',
  };


  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private US: UserService
  ) { }

  ngOnInit() {
    console.log('--- sign-in-component ---');
    console.log('router => ', this.router);
    console.log('activatedRoute => ', this.activatedRoute);

    const activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    const routerState: RouterState = this.router.routerState;
    const routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    console.log('activatedRouteSnapshot => ', activatedRouteSnapshot);
    console.log('routerState => ', routerState);
    console.log('routerStateSnapshot => ', routerStateSnapshot);
  }


  doLogin(data): void {
    console.log(data.form);
    if (data.form.status === 'VALID') {
      // console.log(this.userInfo);
      // console.log(data);

      this.US.login(this.userInfo);


      this.router.navigateByUrl('/home');
    }

  }

  retrievePwd(): void {
    this.router.navigateByUrl('logout');
  }
}
