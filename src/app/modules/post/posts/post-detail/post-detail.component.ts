import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Models
import { IPost } from '@models/IPost';

// Services
import { PostService } from '@services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  post: IPost;
  id: string;
  isLoading = false;
  error: string = null;
  subscription: Subscription;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.onFetchPost(this.id);
    });
  }

  onFetchPost(id: string) {

    this.isLoading = true;
    this.postService.getPost(id).subscribe(postData => {
      this.isLoading = false;
      this.post = postData;
    },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
  }

  onEditPost() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeletePost() {
    this.isLoading = true;
    this.postService.deletePost(this.id).subscribe(res => {
      this.isLoading = false;
      this.router.navigate(['/posts']);
    },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
