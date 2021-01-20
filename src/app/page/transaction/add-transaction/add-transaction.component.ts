import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {


  durationType: {
    durationTypeName: string
  }[];
  durationTypeSelected: string;

  payment: {
    paymentName: string
  }[];
  paymentSelected: string;

  laundryType: {
    laundryTypeName: string
  }[];
  laundryTypeSelected: string;

  perfume: {
    perfumeName: string
  }[];
  perfumeSelected: string


  constructor() {
    this.perfume = [];
    this.perfumeSelected = "";
    this.laundryType = [];
    this.laundryTypeSelected = "";
    this.payment = [];
    this.paymentSelected = "";
    this.durationType = [];
    this.durationTypeSelected = "";
  }

  ngOnInit(): void {
    this.durationType = [
      {
        durationTypeName: '1Day'
      },
      {
        durationTypeName: '2Day'
      },
      {
        durationTypeName: '3Day'
      }
    ];

    this.perfume = [
      {
        perfumeName: 'Bulgari'
      },
      {
        perfumeName: 'Lavender'
      },
      {
        perfumeName: 'Lily Sweet'
      }
    ];

    this.laundryType = [
      {
        laundryTypeName: 'Kiloan 01'
      },
      {
        laundryTypeName: 'Satuan 01'
      }
    ]

    this.payment = [
      {
        paymentName: 'Debit'
      },
      {
        paymentName: 'Shopee Pay'
      },
      {
        paymentName: 'Gopay'
      }
    ]
  }

}
