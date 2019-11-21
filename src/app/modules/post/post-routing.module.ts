import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PostsComponent } from '@modules/post/posts/posts.component';
import { PostDetailComponent } from '@modules/post/posts/post-detail/post-detail.component';
import { PostEditComponent } from '@modules/post/posts/post-edit/post-edit.component';

const appRoutes: Routes = [
   { path: '', component: PostsComponent },
   { path: 'new', component: PostEditComponent },
   { path: ':id/edit', component: PostEditComponent },
   { path: ':id', component: PostDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
