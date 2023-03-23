import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndUserHomeComponent } from './end-user-home/end-user-home.component';

const routes: Routes = [
  { path: 'end-user', component: EndUserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndUserRoutingModule { }
