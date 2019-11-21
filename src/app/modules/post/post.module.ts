import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Modules
import { PostRoutingModule } from '@modules/post/post-routing.module';
import { SharedModule } from '@shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Components
import { PostsComponent } from '@modules/post/posts/posts.component';
import { PostListComponent } from '@modules/post/posts/post-list/post-list.component';
import { PostItemComponent } from '@modules/post/posts/post-list/post-item/post-item.component';
import { PostDetailComponent } from '@modules/post/posts/post-detail/post-detail.component';
import { PostEditComponent } from '@modules/post/posts/post-edit/post-edit.component';

// Services
import { PostService } from '@services/post.service';
import { DropdownDirective } from '@services/dropdown.directive';

@NgModule({
  imports: [
    PostRoutingModule,
    SharedModule,
    CommonModule,
    InfiniteScrollModule
  ],
  declarations: [
    DropdownDirective,
    PostsComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailComponent,
    PostEditComponent
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
