import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

import { APP_BASE_HREF } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { LoadingSpinnerComponent } from '@shared/loading-spinner/loading-spinner.component';
import { RegisterComponent } from '../auth/register/register.component';
import { PostsComponent } from '../posts/posts.component';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { PostItemComponent } from '../posts/post-list/post-item/post-item.component';
import { PostEditComponent } from '../posts/post-edit/post-edit.component';
import { PostDetailComponent } from '../posts/post-detail/post-detail.component';

import { AppRoutingModule } from '../app-routing.module';

import { AuthService } from '@services/auth.service';
import { PostService } from '@services/post.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent, LoadingSpinnerComponent, RegisterComponent, PostsComponent,
        PostListComponent, PostItemComponent, PostEditComponent, PostDetailComponent
      ],
      imports: [
        AppRoutingModule, FormsModule, ReactiveFormsModule, InfiniteScrollModule, HttpClientModule
      ],
      providers: [
        AuthService, PostService, { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
