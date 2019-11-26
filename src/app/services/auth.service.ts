import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from '@environments/environment';

// Models
import { IAuth } from '@models/IAuth';

// Services
import { RequestService } from '@services/request.service';

@Injectable()

export class AuthService {
    authUser: IAuth;
    user: BehaviorSubject<IAuth>;
    firbaseApiKey: string;

    constructor(
        private requestService: RequestService,
    ) {
        this.user = new BehaviorSubject<IAuth>(this.hasUserData());
        this.firbaseApiKey = environment.firbaseApiKey;
    }

    isUserLoggedIn(): boolean {
        const loadedUser = JSON.parse(localStorage.getItem('userData'));
        if (loadedUser) {
            this.user.next(loadedUser);
            return true;
        }
        return false;
    }

    hasUserData() {
        return JSON.parse(localStorage.getItem('userData'));
    }

    signup(authUser: IAuth[]) {
        return this.requestService.authUser<IAuth>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + this.firbaseApiKey, authUser).pipe(
            catchError(this.handleError),
            map(responseData => {
                return responseData;
            })
        );
    }

    login(authUser: IAuth[]) {
        return this.requestService.authUser<IAuth>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + this.firbaseApiKey, authUser).pipe(
            catchError(this.handleError),
            map(responseData => {
                localStorage.setItem('userData', JSON.stringify(responseData));
            })
        );
    }

    forgotPassword(authUser: IAuth[]) {
        return this.requestService.authUser<IAuth>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=' + this.firbaseApiKey, authUser).pipe(
            catchError(this.handleError),
            map(responseData => {
                return responseData;
            })
        );
    }

    changePassword(authUser: IAuth[]) {
        return this.requestService.authUser<IAuth>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=' + this.firbaseApiKey, authUser).pipe(
            catchError(this.handleError),
            map(responseData => {
                return responseData;
            })
        );
    }

    logout() {
        localStorage.removeItem('userData');
        this.user.next(null);
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
        }
        return throwError(errorMessage);
    }

}
