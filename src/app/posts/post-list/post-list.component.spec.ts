import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '@app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { LoadingSpinnerComponent } from '@shared/loading-spinner/loading-spinner.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '@app/services/post.service';
import { AuthComponent } from '@app/auth/auth.component';
import { RegisterComponent } from '@app/auth/register/register.component';
import { PostsComponent } from '../posts.component';
import { PostEditComponent } from '../post-edit/post-edit.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';


describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

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
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
