import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Constants } from '@config/constants';

// Validator
import { CustomValidator } from '@app/validator/custom.validator';

// Models
import { IAuth } from '@models/IAuth';

// Services
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  isLoading = false;
  error: string = null;
  success: string = null;
  userIdToken: string;
  user: IAuth;
  changePasswordForm: FormGroup;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.subscription = this.authService.user.subscribe(user => {
      this.userIdToken = user.idToken;
    });
    this.initForm();
  }

  onSubmit() {
    this.isLoading = true;
    const payload = {...this.changePasswordForm.value, idToken: this.userIdToken}
    this.subscription = this.authService.changePassword(payload).subscribe(userData => {
      this.isLoading = false;
      this.success = 'Password Updated Successfully';
    },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
    this.changePasswordForm.reset();
  }

  private initForm() {

    this.changePasswordForm = this.fb.group({
      // email: ['piyush.pandey@yopmail.com', [
      //   Validators.required,
      //   Validators.email,
      // ]],
      password: ['', [
        Validators.required,
        Validators.minLength(Constants.CHARACTER_LIMIT.passwordMinimumLength),
        Validators.maxLength(Constants.CHARACTER_LIMIT.passwordMaximumLength),
        Validators.pattern(Constants.PATTERN.passwordPattern),
      ]],
      confirm_password: ['', [
        Validators.required,
        Validators.pattern(Constants.PATTERN.passwordPattern),
      ]]
    }, {
      validator: CustomValidator.matchPassword.bind(this)
    });
  }

  ngOnDestroy() {
  }

}
