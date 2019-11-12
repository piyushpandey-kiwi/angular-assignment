import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

// Services
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoading = false;
  error: string = null;
  authForm: FormGroup;
  subscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.isLoading = true;
    this.subscription = this.authService.login(this.authForm.value).subscribe(userData => {
      this.isLoading = false;
      this.router.navigate(['/posts']);
    },
    errorMessage => {
      this.isLoading = false;
      this.error = errorMessage;
    }
    );
  }

  private initForm() {
    this.authForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
