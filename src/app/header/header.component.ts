import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Services
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
