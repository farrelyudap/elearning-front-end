import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dtl-transaction',
  templateUrl: './list-dtl-transaction.component.html',
  styleUrls: ['./list-dtl-transaction.component.css']
})
export class ListDtlTransactionComponent implements OnInit {

  dtlTransaction:{
    laundryTypeId: {
      laundryTypeName: string
    },
    durationTypeId: {
      durationTypeName: string
    },
    totalUnit: number,
    perfumeId:{
      perfumeName: string
    },
    descriptionItem: string,
    subTotal: number,
    outDateTime: string
  }[];

  constructor() { 
    this.dtlTransaction = [];
  }

  ngOnInit(): void {
    this.dtlTransaction = [
      {
        laundryTypeId:{
          laundryTypeName: 'Kiloan 01'
        },
        durationTypeId:{
          durationTypeName: '1Day'
        },
        totalUnit: 2,
        perfumeId:{
          perfumeName: 'Lavender'
        },
        descriptionItem: 'Kemeja',
        subTotal: 7500,
        outDateTime: '11-Dec-2020'
      },
      {
        laundryTypeId:{
          laundryTypeName: 'Satuan 02'
        },
        durationTypeId:{
          durationTypeName: '2Day'
        },
        totalUnit: 3,
        perfumeId:{
          perfumeName: 'Lavender'
        },
        descriptionItem: 'Kaos Dalam',
        subTotal: 7500,
        outDateTime: '12-Dec-2020'
      }
    ]
  }

}
