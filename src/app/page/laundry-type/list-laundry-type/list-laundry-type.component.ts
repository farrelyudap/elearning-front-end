import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-laundry-type',
  templateUrl: './list-laundry-type.component.html',
  styleUrls: ['./list-laundry-type.component.css']
})
export class ListLaundryTypeComponent implements OnInit {

  laundryType: {
    laundryTypeName: string,
    laundryTypeCode: string,
    laundryTypePrice: number,
    durationTypeId: {
      durationTypeCode: string
    }
  }[];
  durationType: {
    durationTypeCode: string
  }[];
  durationTypeSelected: string;

  display: boolean = false;
  constructor() { 
    this.laundryType = [];
    this.durationType = [];
    this.durationTypeSelected = "";
  }

  ngOnInit(): void {

    this.durationType = [
      {
        durationTypeCode: 'KLN01'
      },
      {
        durationTypeCode: 'KLN02'
      },
      {
        durationTypeCode: 'STN01'
      },
      {
        durationTypeCode: 'STN02'
      }
  ];
    this.laundryType = [
      {
        laundryTypeName: 'Kiloan01',
        laundryTypeCode: 'KLN01',
        laundryTypePrice: 15000,
        durationTypeId:{
          durationTypeCode: '1Day'
        }
      },
      {
        laundryTypeName: 'Satuan01',
        laundryTypeCode: 'STN01',
        laundryTypePrice: 7000,
        durationTypeId:{
          durationTypeCode: '2Day'
        }
      },
      {
        laundryTypeName: 'Satuan02',
        laundryTypeCode: 'STN02',
        laundryTypePrice: 10000,
        durationTypeId:{
          durationTypeCode: '1Day'
        }
      }
    ]
  }
  showDialog(){
    this.display = true;
  }

}
