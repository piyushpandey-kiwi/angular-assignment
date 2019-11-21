import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { HeaderComponent } from '@shared/components/header/header.component';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { PostsComponent } from '@modules/post/posts/posts.component';
import { PostListComponent } from '@modules/post/posts/post-list/post-list.component';
import { PostEditComponent } from '@modules/post/posts/post-edit/post-edit.component';
import { PostDetailComponent } from '@modules/post/posts/post-detail/post-detail.component';

// Services
import { AuthService } from '@services/auth.service';
import { PostService } from '@services/post.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent, LoadingSpinnerComponent, PostsComponent, PostListComponent,
        PostEditComponent, PostDetailComponent
      ],
      imports: [
        RouterTestingModule, InfiniteScrollModule, HttpClientModule, FormsModule, ReactiveFormsModule
      ],
      providers: [
        AuthService,
        PostService
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
