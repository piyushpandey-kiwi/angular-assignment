import { NgModule } from '@angular/core';

//  Modules
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { SharedModule } from '@shared/shared.module';

// Components
import { HomeComponent } from '@modules/home/home/home.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
  ]
})
export class HomeModule { }
