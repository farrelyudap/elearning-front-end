import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStatusComponent } from 'src/app/page/status/add-status/add-status.component';
import { ListStatusComponent } from 'src/app/page/status/list-status/list-status.component';

const routes: Routes = [
  {
    path: 'add-status',
    component: AddStatusComponent
  },
  {
    path: 'list-status',
    component: ListStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
