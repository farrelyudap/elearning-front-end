import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { AddTransactionComponent } from 'src/app/page/transaction/add-transaction/add-transaction.component';
import { ListTransactionComponent } from 'src/app/page/transaction/list-transaction/list-transaction.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AddTransactionComponent,
    ListTransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    InputTextModule
  ]
})
export class TransactionModule { }
