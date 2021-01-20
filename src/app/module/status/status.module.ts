import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { AddStatusComponent } from 'src/app/page/status/add-status/add-status.component';
import { ListStatusComponent } from 'src/app/page/status/list-status/list-status.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AddStatusComponent,
    ListStatusComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    TableModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    InputTextModule
  ]
})
export class StatusModule { }
