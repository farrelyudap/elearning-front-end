import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { DashboardCashierComponent } from 'src/app/page/dashboard-cashier/dashboard-cashier.component';
import { TransactionModule } from '../transaction/transaction.module';
import { DtlTransactionModule } from '../dtl-transaction/dtl-transaction.module';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    DashboardCashierComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    TransactionModule,
    DtlTransactionModule,
    CarouselModule
  ]
})
export class CashierModule { }
