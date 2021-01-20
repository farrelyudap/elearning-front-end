import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentComponent } from 'src/app/page/payment/add-payment/add-payment.component';
import { ListPaymentComponent } from 'src/app/page/payment/list-payment/list-payment.component';

const routes: Routes = [
  {
    path: 'add-payment',
    component: AddPaymentComponent
  },
  {
    path: 'list-payment',
    component: ListPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
