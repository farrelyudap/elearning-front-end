import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPerfumeComponent } from 'src/app/page/perfume/add-perfume/add-perfume.component';
import { ListPerfumeComponent } from 'src/app/page/perfume/list-perfume/list-perfume.component';

const routes: Routes = [
  {
    path: 'add-perfume',
    component: AddPerfumeComponent
  },
  {
    path: 'list-perfume',
    component: ListPerfumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumeRoutingModule { }
