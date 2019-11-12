import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Subject } from 'rxjs';

// Models
import { IPost } from '@models/IPost';

// Services
import { PostService } from '@services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();

  isLoading = false;
  posts: IPost[] = [];
  subscription: Subscription;
  error = null;
  totalPosts: 0;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this.postService.getPosts().subscribe(postData => {
      this.isLoading = false;
      this.posts = postData;
    },
    errorMessage => {
      this.isLoading = false;
      this.error = errorMessage;
    }
    );
  }

  onNewPost() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
