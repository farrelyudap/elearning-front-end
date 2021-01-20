import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDurationTypeComponent } from 'src/app/page/duration-type/add-duration-type/add-duration-type.component';
import { ListDurationTypeComponent } from 'src/app/page/duration-type/list-duration-type/list-duration-type.component';

const routes: Routes = [
  {
    path: 'add-duration-type',
    component: AddDurationTypeComponent
  },
  {
    path: 'list-duration-type',
    component: ListDurationTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DurationTypeRoutingModule { }
