import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';
import { LogoutPageComponent } from './logout-page/logout-page.component';


@NgModule({
  declarations: [
    LogoutPageComponent
  ],
  imports: [
    CommonModule,
    LogoutRoutingModule
  ]
})
export class LogoutModule { }
