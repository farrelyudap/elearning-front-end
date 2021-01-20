import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCashierComponent } from 'src/app/page/dashboard-cashier/dashboard-cashier.component';

const routes: Routes = [
  {
    path: 'dashboard-cashier',
    component: DashboardCashierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
