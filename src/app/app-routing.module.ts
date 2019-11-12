import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';

import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'posts/new', component: PostEditComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id/edit', component: PostEditComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id', component: PostDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
