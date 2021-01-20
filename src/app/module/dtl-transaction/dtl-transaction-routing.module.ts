import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDtlTransactionComponent } from 'src/app/page/dtl-transaction/list-dtl-transaction/list-dtl-transaction.component';

const routes: Routes = [
  {
    path: 'list-dtl-transaction',
    component: ListDtlTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DtlTransactionRoutingModule { }
