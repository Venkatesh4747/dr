import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { IndexComponent } from './index/index.component';
import { NbCardModule, NbIconModule, NbLayoutModule, NbListModule, NbMenuModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons/eva-icons.module';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    NbUserModule,
    NbListModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule
  ]
})
export class DoctorModule { }
