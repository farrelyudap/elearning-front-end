import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from 'src/app/page/dashboard-admin/dashboard-admin.component';
import { LaundryTypeModule } from '../laundry-type/laundry-type.module';
import { PerfumeModule } from '../perfume/perfume.module';
import { ListDurationTypeComponent } from 'src/app/page/duration-type/list-duration-type/list-duration-type.component';
import { DurationTypeModule } from '../duration-type/duration-type.module';
import { PaymentModule } from '../payment/payment.module';
import { StatusModule } from '../status/status.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LaundryTypeModule,
    PerfumeModule,
    DurationTypeModule,
    PaymentModule,
    StatusModule,
    UserModule
  ]
})
export class AdminModule { }
