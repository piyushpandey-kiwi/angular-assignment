import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { LoadingSpinnerComponent } from '@shared/loading-spinner/loading-spinner.component';

import { RequestService } from '@services/request.service';
import { PostService } from '@services/post.service';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostDetailComponent, LoadingSpinnerComponent
      ],
      imports: [
        HttpClientModule, RouterTestingModule
      ],
      providers: [
        {
          provide: PostService,
          useClass: RequestService
        },
        PostService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
