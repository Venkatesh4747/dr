import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ForgotComponent } from './forgot/forgot.component';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    IndexComponent,
    ForgotComponent,
    DoctorSignupComponent,
    PatientLoginComponent,
    PatientSignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbCardModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbIconModule

  ]
})
export class AuthModule { }
