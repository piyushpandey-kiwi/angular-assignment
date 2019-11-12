import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';

// Services
import { AuthService } from '@services/auth.service';
import { PostService } from '@services/post.service';
import { DropdownDirective } from '@services/dropdown.directive';

// Shared
import { LoadingSpinnerComponent } from '@shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    RegisterComponent,
    PostsComponent,
    PostListComponent,
    PostDetailComponent,
    PostEditComponent,
    PostItemComponent,
    DropdownDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
