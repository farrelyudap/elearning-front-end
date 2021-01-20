import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { CashierComponent } from './layout/cashier/cashier.component';
import { LoginComponent } from './page/login/login.component';
import { Page404Component } from './page/page404/page404.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    component: CashierComponent,
    loadChildren: () => import('./module/cashier/cashier.module').then(m => m.CashierModule)
  },
  {
    path: '',
    loadChildren: () => import('./module/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }