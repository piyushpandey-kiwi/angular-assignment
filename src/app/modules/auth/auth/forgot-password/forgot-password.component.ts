import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Constants } from '@config/constants';

// Models
import { IAuth } from '@models/IAuth';

// Services
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  isLoading = false;
  error: string = null;
  success: string = null;
  user: IAuth;
  forgotPasswordForm: FormGroup;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.isLoading = true;
    this.subscription = this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe(userData => {
      this.isLoading = false;
      this.success = 'Email Sent Successfully';
    },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
    this.forgotPasswordForm.reset();
  }

  private initForm() {

    this.forgotPasswordForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      requestType: ['PASSWORD_RESET', [
        Validators.required
      ]]
    }, {
    });
  }

  ngOnDestroy() {
  }

}
