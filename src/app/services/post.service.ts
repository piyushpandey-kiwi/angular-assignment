import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

// Models
import { IPost } from '@models/IPost';

// Services
import { RequestService } from '@services/request.service';

@Injectable()

export class PostService {
    posts: IPost[] = [];
    post: IPost;
    postsChanged = new Subject<IPost[]>();
    private destroyed$ = new Subject<IPost[]>();
    private postData: BehaviorSubject<IPost>;

    constructor(
        private requestService: RequestService,
    ) {
        this.postData = new BehaviorSubject<IPost>({} as IPost);
    }

    setPosts(posts: IPost[]) {
        this.posts = posts;
    }

    getPosts(): Observable<IPost[]> {
        return this.requestService.getWithParams<IPost[]>('posts.json')
            .pipe(
                catchError(this.handleError),
                takeUntil(this.destroyed$),
                map(responseData => {
                    this.posts = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            this.posts.push({ ...responseData[key], id: key });
                        }
                    }
                    return this.posts;
                })
            );
    }

    getPost(id: string): Observable<IPost> {
        return this.requestService.get<IPost>('posts/' + id + '.json')
            .pipe(
                catchError(this.handleError),
                takeUntil(this.destroyed$),
                map(responseData => {
                    return this.post = responseData;
                })
            );

    }

    addPost(post: IPost[]) {
        return this.requestService.post<IPost[]>('posts.json', post).pipe(
            catchError(this.handleError),
            map(res => {
                return res;
            })
        );
    }

    updatePost(id: string, post: IPost[]) {
        return this.requestService.put<IPost[]>('posts/' + id + '.json', post).pipe(
            catchError(this.handleError),
            map(res => {
                return res;
            })
        );
    }

    deletePost(id: string) {
        return this.requestService.delete<IPost[]>('posts/' + id + '.json').pipe(
            catchError(this.handleError),
            map(res => {
                return res;
            })
        );
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        errorMessage = errorRes.error.error;
        return throwError(errorMessage);
    }

}
