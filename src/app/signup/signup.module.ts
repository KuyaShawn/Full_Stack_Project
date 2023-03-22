import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupPageComponent } from './signup-page/signup-page.component';


@NgModule({
  declarations: [
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
