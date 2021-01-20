import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-perfume',
  templateUrl: './list-perfume.component.html',
  styleUrls: ['./list-perfume.component.css']
})
export class ListPerfumeComponent implements OnInit {

  perfume: {
    perfumeName: string,
    perfumeCode: string
  }[]

  display: boolean= false;

  constructor() { 
    this.perfume = [];
  }

  ngOnInit(): void {
    this.perfume = [
      {
        perfumeName: 'Lavender',
        perfumeCode: 'LVN'
      }, 
      {
        perfumeName: 'Bulgari',
        perfumeCode: 'BLG'
      },
      {
        perfumeName: 'Lily Sweet',
        perfumeCode: 'LST'
      }
    ]
  }
  showDialog(){
    this.display = true;
  }

}
