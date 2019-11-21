import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@modules/auth/auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', loadChildren: '@modules/home/home.module#HomeModule' },
   { path: 'auth', loadChildren: '@modules/auth/auth.module#AuthModule' },
   { path: 'posts', loadChildren: '@modules/post/post.module#PostModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
