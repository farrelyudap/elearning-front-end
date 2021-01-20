import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule} from 'primeng/button';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from 'src/app/layout/admin/admin.component';
import { CashierComponent } from 'src/app/layout/cashier/cashier.component';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AdminComponent,
    CashierComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    MenubarModule
  ]
})
export class DashboardModule { }
