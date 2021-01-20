import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DtlTransactionRoutingModule } from './dtl-transaction-routing.module';
import { ListDtlTransactionComponent } from 'src/app/page/dtl-transaction/list-dtl-transaction/list-dtl-transaction.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ListDtlTransactionComponent
  ],
  imports: [
    CommonModule,
    DtlTransactionRoutingModule,
    ButtonModule,
    TableModule
  ]
})
export class DtlTransactionModule { }
