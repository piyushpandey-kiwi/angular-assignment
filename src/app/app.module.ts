import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
