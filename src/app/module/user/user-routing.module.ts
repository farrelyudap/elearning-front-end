import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from 'src/app/page/user/add-user/add-user.component';
import { ListUserComponent } from 'src/app/page/user/list-user/list-user.component';

const routes: Routes = [
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'list-user',
    component: ListUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
