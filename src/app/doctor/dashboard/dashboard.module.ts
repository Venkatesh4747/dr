import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbButtonModule, NbCalendarModule, NbCardModule, NbIconModule, NbListModule, NbTabsetModule } from '@nebular/theme';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
    NbTabsetModule,
    NgxDatatableModule
    
  ]
})
export class DashboardModule { }
