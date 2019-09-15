import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


// 引入共享
import { SharedModule } from 'src/app/Shared/shared.module';
import { UiModule } from 'src/app/Shared/ui/ui.module';

// 模块私有服务
import { LoginService } from './serve/login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    UiModule
  ],
  exports: [
    // LoginComponent
  ],
  providers: [,
    LoginService
  ]
})
export class LoginModule { }
