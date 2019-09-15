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
        if (environment) {
          return environment.baseUrl;
        }
      }
    }
  ]
})
export class SharedModule { }
