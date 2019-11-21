import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '@modules/auth/auth/auth.component';
import { RegisterComponent } from '@modules/auth/auth/register/register.component';

const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
