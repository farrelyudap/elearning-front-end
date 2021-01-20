import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-duration-type',
  templateUrl: './list-duration-type.component.html',
  styleUrls: ['./list-duration-type.component.css']
})

export class ListDurationTypeComponent implements OnInit {

  durationType: {
    durationTypeName: string,
    durationTypeCode: string,
    durationTypePrice: number
  }[];

  display: boolean= false;

  constructor() {
    this.durationType = [];
  }

  ngOnInit(): void {
    this.durationType = [
      {
        durationTypeName: '24Jam',
        durationTypeCode: '1Day',
        durationTypePrice: 15000
      },
      {
        durationTypeName: '48Jam',
        durationTypeCode: '2Day',
        durationTypePrice: 10000
      },
      {
        durationTypeName: '72Jam',
        durationTypeCode: '3Day',
        durationTypePrice: 7000
      }
    ]
  }

  showDialog(){
    this.display = true;
  }

}
