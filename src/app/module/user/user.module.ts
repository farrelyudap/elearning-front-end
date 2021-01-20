import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from 'src/app/page/user/add-user/add-user.component';
import { ListUserComponent } from 'src/app/page/user/list-user/list-user.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AddUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    DialogModule
  ]
})
export class UserModule { }
