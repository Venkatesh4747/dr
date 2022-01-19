import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { IndexComponent } from './index/index.component';
import { NbIconModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule
  ]
})
export class DoctorModule { }
