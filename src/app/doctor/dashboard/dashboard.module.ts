import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbButtonModule, NbCalendarModule, NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbButtonModule,
    NbCalendarModule,
    
  ]
})
export class DashboardModule { }
