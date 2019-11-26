import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@modules/auth/auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule) },
   { path: 'auth', loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule) },
   { path: 'posts', loadChildren: () => import('@modules/post/post.module').then(m => m.PostModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
