import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { NbIconModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule
  ]
})
export class AdminModule { }
