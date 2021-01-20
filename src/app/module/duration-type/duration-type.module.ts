import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationTypeRoutingModule } from './duration-type-routing.module';
import { AddDurationTypeComponent } from 'src/app/page/duration-type/add-duration-type/add-duration-type.component';
import { ListDurationTypeComponent } from 'src/app/page/duration-type/list-duration-type/list-duration-type.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AddDurationTypeComponent,
    ListDurationTypeComponent
  ],
  imports: [
    CommonModule,
    DurationTypeRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DialogModule
  ]
})
export class DurationTypeModule { }
