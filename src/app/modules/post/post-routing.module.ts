import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@modules/auth/auth/auth.guard';

// Components
import { PostsComponent } from '@modules/post/posts/posts.component';
import { PostDetailComponent } from '@modules/post/posts/post-detail/post-detail.component';
import { PostEditComponent } from '@modules/post/posts/post-edit/post-edit.component';

const appRoutes: Routes = [
   { path: '', component: PostsComponent, canActivate: [AuthGuard] },
   { path: 'new', component: PostEditComponent, canActivate: [AuthGuard] },
   { path: ':id/edit', component: PostEditComponent, canActivate: [AuthGuard] },
   { path: ':id', component: PostDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
