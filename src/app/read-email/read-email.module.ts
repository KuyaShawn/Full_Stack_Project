import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadEmailRoutingModule } from './read-email-routing.module';
import { ReadEmailPageComponent } from './read-email-page/read-email-page.component';


@NgModule({
  declarations: [
    ReadEmailPageComponent
  ],
  imports: [
    CommonModule,
    ReadEmailRoutingModule
  ]
})
export class ReadEmailModule { }
