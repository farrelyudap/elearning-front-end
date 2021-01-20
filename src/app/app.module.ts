import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './page/page404/page404.component';
import { LoginComponent } from './page/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { TableModule } from 'primeng/table';
import { ListDtlTransactionComponent } from './page/dtl-transaction/list-dtl-transaction/list-dtl-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LoginComponent  
  ],
  imports: [
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    ButtonModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
