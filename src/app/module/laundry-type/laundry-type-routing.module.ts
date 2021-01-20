import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLaundryTypeComponent } from 'src/app/page/laundry-type/add-laundry-type/add-laundry-type.component';
import { ListLaundryTypeComponent } from 'src/app/page/laundry-type/list-laundry-type/list-laundry-type.component';

const routes: Routes = [
  {
    path: 'add-laundry-type',
    component: AddLaundryTypeComponent
  },
  {
    path: 'list-laundry-type',
    component: ListLaundryTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryTypeRoutingModule { }
