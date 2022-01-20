import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { NbCardModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbUserModule } from '@nebular/theme';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbIconModule,
    NbMenuModule,
    NbCardModule,
    NbUserModule,
    NbContextMenuModule
  ]
})
export class AdminModule { }
