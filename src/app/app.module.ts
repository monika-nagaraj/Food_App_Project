import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { ManagerChoiceComponent } from './manager-choice/manager-choice.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AdminComponent } from './admin/admin.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddMenuComponent,
    TakeOrderComponent,
    ManagerChoiceComponent,
    AddStaffComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
