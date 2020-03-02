import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcLandingRoutingModule } from './abc-landing-routing.module';
import { AbcHomeComponent } from './abc-home/abc-home.component';


@NgModule({
  declarations: [AbcHomeComponent],
  imports: [
    CommonModule,
    AbcLandingRoutingModule
  ]
})
export class AbcLandingModule { }
