import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { LoadingSpinnerComponent } from '@shared/components/loading-spinner/loading-spinner.component';
import { HeaderComponent } from '@shared/components/header/header.component';

// Services
import { AuthService } from '@app/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoadingSpinnerComponent,
    HeaderComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    HeaderComponent
  ],
  providers: [
    AuthService
  ],
  entryComponents: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
