import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Constants } from '@config/constants';

// Models
import { IPost } from '@models/IPost';

// Services
import { PostService } from '@services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {

  isLoading = false;
  error: string = null;
  post: IPost;
  id: string;
  editMode = false;
  postForm: FormGroup;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.editMode) {
      this.postService.updatePost(this.id, this.postForm.value).subscribe(res => {
        this.isLoading = false;
        this.onCancel();
      },
        errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
        }
      );
    } else {
      this.postService.addPost(this.postForm.value).subscribe(res => {
        this.isLoading = false;
        this.onCancel();
      },
        errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/posts']);
  }

  setPostData() {
    this.postForm.patchValue({
      name: this.post.name,
      description: this.post.description,
      imagePath: this.post.imagePath
    });
  }

  private initForm() {

    if (this.editMode) {
      this.isLoading = true;
      this.postService.getPost(this.id).subscribe(postData => {
        this.isLoading = false;
        this.post = postData;
        this.setPostData();
      },
        errorMessage => {
          this.isLoading = false;
          this.error = errorMessage;
        }
      );
    }

    this.postForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(Constants.PATTERN.name)
      ]],
      description: ['', [
        Validators.required
      ]],
      imagePath: ['', [
        Validators.required,
        Validators.pattern(Constants.PATTERN.url)
      ]]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
