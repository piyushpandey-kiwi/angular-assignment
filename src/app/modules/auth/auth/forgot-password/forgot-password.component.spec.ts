import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { HeaderComponent } from '@shared/components/header/header.component';
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { ForgotPasswordComponent } from '@modules/auth/auth/forgot-password/forgot-password.component';

// Services
import { AuthService } from '@services/auth.service';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent, LoadingSpinnerComponent, ForgotPasswordComponent
      ],
      imports: [
        RouterTestingModule, FormsModule, HttpClientModule, ReactiveFormsModule
      ],
      providers: [
        AuthService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
