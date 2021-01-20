import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css']
})
export class ListPaymentComponent implements OnInit {

  payment: {
    paymentName: string,
    paymentCode: string
  }[];

  display: boolean= false;

  constructor() {
    this.payment = []
  }

  ngOnInit(): void {
    this.payment = [
      {
        paymentName: 'Debit',
        paymentCode: 'DBT'
      },
      {
        paymentName: 'Gopay',
        paymentCode: 'GPY'
      },
      {
        paymentName: 'Shopee Pay',
        paymentCode: 'SPY'
      }
    ];
  }

  showDialog(){
    this.display = true;
  }
}
