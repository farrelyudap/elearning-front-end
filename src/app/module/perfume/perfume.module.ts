import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfumeRoutingModule } from './perfume-routing.module';
import { AddPerfumeComponent } from 'src/app/page/perfume/add-perfume/add-perfume.component';
import { ListPerfumeComponent } from 'src/app/page/perfume/list-perfume/list-perfume.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AddPerfumeComponent,
    ListPerfumeComponent
  ],
  imports: [
    CommonModule,
    PerfumeRoutingModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DialogModule
  ]
})
export class PerfumeModule { }
