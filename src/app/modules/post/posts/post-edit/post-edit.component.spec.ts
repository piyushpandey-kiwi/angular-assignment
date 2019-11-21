import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

// Modules
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Components
import { HeaderComponent } from '@shared/components/header/header.component';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { PostsComponent } from '@modules/post/posts/posts.component';
import { PostEditComponent } from '@modules/post/posts/post-edit/post-edit.component';
import { PostListComponent } from '@modules/post/posts/post-list/post-list.component';
import { PostItemComponent } from '@modules/post/posts/post-list/post-item/post-item.component';

// Services
import { PostService } from '@services/post.service';

import { AuthService } from '@services/auth.service';

describe('PostEditComponent', () => {
  let component: PostEditComponent;
  let fixture: ComponentFixture<PostEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent, LoadingSpinnerComponent, PostsComponent, PostEditComponent,
        PostListComponent, PostItemComponent
      ],
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule, InfiniteScrollModule
      ],
      providers: [
        AuthService,
        PostService
      ]
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
