import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from 'src/app/page/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
