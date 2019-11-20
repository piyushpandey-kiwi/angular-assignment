import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '@app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from '@app/auth/auth.component';
import { PostsComponent } from './posts.component';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { RegisterComponent } from '@app/auth/register/register.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoadingSpinnerComponent } from '@app/shared/loading-spinner/loading-spinner.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PostService } from '@app/services/post.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent, RegisterComponent, PostsComponent, PostEditComponent, PostDetailComponent,
        PostListComponent, LoadingSpinnerComponent
      ],
      imports: [
        AppRoutingModule, InfiniteScrollModule, HttpClientModule, FormsModule, ReactiveFormsModule
      ],
      providers: [
        PostService, { provide: APP_BASE_HREF, useValue: '/' }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
