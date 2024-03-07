import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { TakeOrderComponent } from './take-order/take-order.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { ManagerChoiceComponent } from './manager-choice/manager-choice.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent,canActivate:[AuthGuard]},
  {path:"add-menu",component:AddMenuComponent},
  {path:"take-order",component:TakeOrderComponent},
  {path:"add-staff",component:AddStaffComponent},
  {path:"m-choice",component:ManagerChoiceComponent},
  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
