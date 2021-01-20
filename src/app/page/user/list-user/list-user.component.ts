import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  user: {
    username: string,
    password: string,
    roleId: {
      roleCode: string
    },
    profileId: {
      name: string,
      address: string,
      phoneNumber: string,
      gender: string
    }
  }[];
  role: {
    roleCode: string
  }[];
  roleSelected: string;

  gender: {
    gender: string
  }[];
  genderSelected: string;

  display: boolean = false;
  constructor() {
    this.user = [];
    this.role = [];
    this.gender = [];
    this.roleSelected = "";
    this.genderSelected = "";
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
    this.user = [
      {
        username: 'Admin123',
        password: 'Admin123',
        roleId: {
          roleCode: 'AD'
        },
        profileId: {
          name: 'Fido Octafian',
          address: 'Jl. Bekasi Barat Blok D',
          phoneNumber: '087882461331',
          gender: 'Laki-Laki'
        }
      },
      {
        username: 'Kasir123',
        password: 'Kasir123',
        roleId: {
          roleCode: 'KS'
        },
        profileId: {
          name: 'Achmad Anshori',
          address: 'Jl. Suka Mulya Kemayoran Jakarta Pusat',
          phoneNumber: '0878815612211',
          gender: 'Laki-Laki'
        }
      }
    ]
  }

  showDialog() {
    this.display = true;
  }

}
