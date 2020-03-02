import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLandingRoutingModule } from './default-landing-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DefaultLandingRoutingModule
  ]
})
export class DefaultLandingModule { }
