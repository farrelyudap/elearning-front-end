import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', routerLink: 'dashboard-cashier'
      },
      {
        label: 'Transaction', routerLink: 'list-transaction',
      }
    ];
  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
