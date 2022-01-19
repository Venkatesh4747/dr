import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSignupComponent } from './doctor-signup/doctor-signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotComponent
      },
      {
        path: 'doctor-signup',
        component: DoctorSignupComponent,
      },
      {
        path: 'patient-login',
        component: PatientLoginComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
