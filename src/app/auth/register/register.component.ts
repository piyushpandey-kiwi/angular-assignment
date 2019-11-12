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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  isLoading = false;
  error: string = null;
  success: string = null;
  user: IAuth;
  registerForm: FormGroup;
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
    this.subscription = this.authService.signup(this.registerForm.value).subscribe(userData => {
      this.isLoading = false;
      this.success = 'Record Added Successfully';
    },
    errorMessage => {
      this.isLoading = false;
      this.error = errorMessage;
    }
    );
    this.registerForm.reset();
  }

  private initForm() {
    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(Constants.PATTERN.name)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
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
    this.subscription.unsubscribe();
  }

}
