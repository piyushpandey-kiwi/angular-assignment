import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { PostsComponent } from '@modules/post/posts/posts.component';
import { PostListComponent } from '@modules/post/posts/post-list/post-list.component';
import { PostEditComponent } from '@modules/post/posts/post-edit/post-edit.component';
import { PostDetailComponent } from '@modules/post/posts/post-detail/post-detail.component';

// Services
import { PostService } from '@app/services/post.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsComponent, PostListComponent, PostEditComponent, PostDetailComponent
      ],
      imports: [
        RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule, InfiniteScrollModule
      ],
      providers: [
        PostService
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
