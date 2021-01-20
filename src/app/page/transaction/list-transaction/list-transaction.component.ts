import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {

  transaction: {
    transactionNumber: string,
    totalPrice: number,
    inDateTime: string,
    paymentId: {
      paymentName: string,
      paymentCode: string,
    },
    customerId:{
      customerName: string,
      customerAddress: string,
      phoneNumber: string
    }

  }[];
  constructor() {
    this.transaction = [];
  }

  ngOnInit(): void {
    this.transaction = [
      {
        transactionNumber: 'TRX-0120201210',
        totalPrice: 15000,
        inDateTime: '10-Dec-2020',
        paymentId: {
          paymentName: 'Debit',
          paymentCode: 'DBT'
        },
        customerId:{
          customerName: 'Nia',
          customerAddress: 'Jl. Kemang Raya Barat',
          phoneNumber: '087882561441'
        }
      },
      {
        transactionNumber: 'TRX-0220201215',
        totalPrice: 25000,
        inDateTime: '15-Dec-2020',
        paymentId: {
          paymentName: 'Shopee Pay',
          paymentCode: 'SPY'
        },
        customerId:{
          customerName: 'Kelana Wardaana',
          customerAddress: 'Jl. Cempaka Putih Barat Blok D',
          phoneNumber: '087882461331'
        }
      },
      {
        transactionNumber: 'TRX-0320201220',
        totalPrice: 25000,
        inDateTime: '15-Dec-2020',
        paymentId: {
          paymentName: 'Debit',
          paymentCode: 'DBT'
        },
        customerId:{
          customerName: 'Andre Aryanto',
          customerAddress: 'Jl. Johar Baru Tengah Blok D',
          phoneNumber: '087886561241'
        }
      }
    ]
  }

}
