import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  role: {
     roleCode: string
  }[];
  roleSelected: string;

  gender:{
    gender: string
  }[];
  genderSelected: string;
  
  constructor() {
    this.role = [];
    this.roleSelected = '';
    this.gender = [];
    this.genderSelected ='';
  }

  ngOnInit(): void {
    this.role = [
      {
        roleCode: 'AD'
      },
      {
        roleCode: 'KS'
      },
    ]

    this.gender = [
      {
        gender: 'Laki-Laki'
      },
      {
        gender: 'Perempuan'
      }
    ]
  }

}
