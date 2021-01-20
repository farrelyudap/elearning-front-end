import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.css']
})
export class ListStatusComponent implements OnInit {

  status: {
    statusName: string,
    statusCode: string
  }[];

  display: boolean= false;

  constructor() { 
    this.status = []
  }

  ngOnInit(): void {
    this.status = [
      {
        statusName: 'Proses',
        statusCode: 'PRS'
      },
      {
        statusName: 'Done',
        statusCode: 'DNE'
      }
    ]
  }

  showDialog(){
    this.display = true;
  }


}
