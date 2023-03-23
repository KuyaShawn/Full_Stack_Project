import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReadEmailComponent } from './read-email/read-email.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
      },
      {
        path: 'view-user',
        component: ViewUserComponent,
      },
      {
        path: 'read-email',
        component: ReadEmailComponent,
      },
      {
        path: 'view-detail',
        component: ViewDetailComponent,
      },
      {
        path: '',
        redirectTo: 'view-user',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
