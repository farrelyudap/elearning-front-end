import { Component, OnInit } from '@angular/core';

// interface DurationType{
//   durationTypeCode: string
// }

@Component({
  selector: 'app-add-laundry-type',
  templateUrl: './add-laundry-type.component.html',
  styleUrls: ['./add-laundry-type.component.css']
})
export class AddLaundryTypeComponent implements OnInit {

  durationType: {
    durationTypeCode: string
  }[];
  durationTypeSelected: string;

  constructor() { 
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
  }

}
