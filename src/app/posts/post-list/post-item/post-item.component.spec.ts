import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItemComponent } from './post-item.component';

import { AppRoutingModule } from '../../../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthComponent } from '@app/auth/auth.component';
import { RegisterComponent } from '@app/auth/register/register.component';
import { PostsComponent } from '@app/posts/posts.component';
import { PostEditComponent } from '@app/posts/post-edit/post-edit.component';
import { PostDetailComponent } from '@app/posts/post-detail/post-detail.component';
import { LoadingSpinnerComponent } from '@app/shared/loading-spinner/loading-spinner.component';

import { RequestService } from '@app/services/request.service';
import { PostService } from '@app/services/post.service';

describe('PostItemComponent', () => {
  let component: PostItemComponent;
  let fixture: ComponentFixture<PostItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostItemComponent, AuthComponent, RegisterComponent, LoadingSpinnerComponent,
        PostsComponent, PostEditComponent, PostDetailComponent
      ],
      imports: [
        AppRoutingModule, FormsModule, ReactiveFormsModule
      ],
      providers: [
        PostService, { provide: APP_BASE_HREF, useValue: '/' },
        { provide: PostService, useClass: RequestService}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
