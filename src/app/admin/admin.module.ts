import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReadEmailComponent } from './read-email/read-email.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    ReadEmailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
