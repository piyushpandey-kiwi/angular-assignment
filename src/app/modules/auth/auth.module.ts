import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Modules
import { AuthRoutingModule } from '@modules/auth/auth_routing.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { AuthComponent } from '@modules/auth/auth/auth.component';
import { RegisterComponent } from '@modules/auth/auth/register/register.component';

// Services
import { AuthService } from '@services/auth.service';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    CommonModule
  ],
  declarations: [
    AuthComponent,
    RegisterComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
