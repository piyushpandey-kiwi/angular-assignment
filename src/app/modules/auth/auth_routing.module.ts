import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '@modules/auth/auth/auth.component';
import { RegisterComponent } from '@modules/auth/auth/register/register.component';
import { ForgotPasswordComponent } from '@modules/auth/auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '@modules/auth/auth/change-password/change-password.component';

const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
