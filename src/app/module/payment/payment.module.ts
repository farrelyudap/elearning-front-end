import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { AddPaymentComponent } from 'src/app/page/payment/add-payment/add-payment.component';
import { ListPaymentComponent } from 'src/app/page/payment/list-payment/list-payment.component';
import { TableModule } from 'primeng/table'
import { CardModule} from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AddPaymentComponent,
    ListPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    TableModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DialogModule
  ]
})
export class PaymentModule { }
