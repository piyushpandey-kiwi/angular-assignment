import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { PostEditComponent } from './post-edit.component';

import { LoadingSpinnerComponent } from '@shared/loading-spinner/loading-spinner.component';
import { AuthComponent } from '../../auth/auth.component';
import { RegisterComponent } from '../../auth/register/register.component';
import { PostsComponent } from '../../posts/posts.component';
import { PostDetailComponent } from '../../posts/post-detail/post-detail.component';

import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostService } from '@services/post.service';

describe('PostEditComponent', () => {
  let component: PostEditComponent;
  let fixture: ComponentFixture<PostEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostEditComponent, AuthComponent, RegisterComponent,
        PostsComponent, PostDetailComponent, LoadingSpinnerComponent
      ],
      imports: [
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
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
    fixture = TestBed.createComponent(PostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
