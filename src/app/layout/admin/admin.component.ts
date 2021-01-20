import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items: MenuItem[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', routerLink: 'dashboard-admin'
      },
      {
        label: 'User', routerLink: 'list-user',
      },
      {
        label: 'Master',
        items: [
          { label: 'Perfume', routerLink: 'list-perfume'},
          { label: 'Laundry-Type', routerLink:'list-laundry-type'},
          { label: 'Duration-Type', routerLink: 'list-duration-type'},
          { label: 'Payment', routerLink: 'list-payment'},
          { label: 'Status', routerLink: 'list-status'}
        ]
      },
    ];
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
