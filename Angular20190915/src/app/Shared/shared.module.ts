import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from './http/http.module';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'APP_CONFIG', useFactory: () => {
        if (!environment.production) {
          console.log('******************** START ****************************');
          console.log(environment.info + '开始运行, 运行开始时间：' + new Date());
          console.log('********************* END ***************************');
          return environment.baseUrl;
        } else {
          console.log('******************** START ****************************');
          console.log(environment.info + '开始运行, 运行开始时间：' + new Date());
          console.log('********************* END ***************************');
          return;
        }
      }
    }
  ]
})
export class SharedModule { }
