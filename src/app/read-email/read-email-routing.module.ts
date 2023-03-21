import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadEmailPageComponent } from './read-email-page/read-email-page.component';

const routes: Routes = [
  { path: 'read_email', component: ReadEmailPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadEmailRoutingModule { }
