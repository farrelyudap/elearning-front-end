import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTransactionComponent } from 'src/app/page/transaction/add-transaction/add-transaction.component';
import { ListTransactionComponent } from 'src/app/page/transaction/list-transaction/list-transaction.component';

const routes: Routes = [
  {
    path: 'add-transaction',
    component: AddTransactionComponent
  },
  {
    path: 'list-transaction',
    component: ListTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
