import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaundryTypeRoutingModule } from './laundry-type-routing.module';
import { AddLaundryTypeComponent } from 'src/app/page/laundry-type/add-laundry-type/add-laundry-type.component';
import { ListLaundryTypeComponent } from 'src/app/page/laundry-type/list-laundry-type/list-laundry-type.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AddLaundryTypeComponent,
    ListLaundryTypeComponent
  ],
  imports: [
    CommonModule,
    LaundryTypeRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    DialogModule
  ]
})
export class LaundryTypeModule { }
