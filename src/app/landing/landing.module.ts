import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { IndexComponent } from './index/index.component';
import { NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NbLayoutModule,
  ]
})
export class LandingModule { }
