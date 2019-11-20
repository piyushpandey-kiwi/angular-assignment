import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { LoadingSpinnerComponent } from '@shared/loading-spinner/loading-spinner.component';
import { AuthComponent } from '../auth/auth.component';
import { RegisterComponent } from '../auth/register/register.component';
import { PostsComponent } from '../posts/posts.component';
import { PostListComponent } from '../posts/post-list/post-list.component';
import { PostItemComponent } from '../posts/post-list/post-item/post-item.component';
import { PostEditComponent } from '../posts/post-edit/post-edit.component';
import { PostDetailComponent } from '../posts/post-detail/post-detail.component';

import { AuthService } from '@services/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent, AuthComponent, RegisterComponent, LoadingSpinnerComponent,
        PostsComponent, PostListComponent, PostItemComponent, PostEditComponent, PostDetailComponent
      ],
      imports: [
        AppRoutingModule, FormsModule, ReactiveFormsModule, InfiniteScrollModule, HttpClientModule
      ],
      providers: [
        AuthService, { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
