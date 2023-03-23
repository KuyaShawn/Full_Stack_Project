import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EndUserRoutingModule } from './end-user-routing.module';
import { EndUserHomeComponent } from './end-user-home/end-user-home.component';


@NgModule({
  declarations: [
    EndUserHomeComponent
  ],
  imports: [
    CommonModule,
    EndUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class EndUserModule { }
