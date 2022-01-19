import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent implements OnInit {
  submitted = false;
  patientLoginForm = new FormGroup({
    mobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  showPassword = false;

  constructor() { }

  ngOnInit(): void {
  }
  get f(){
    return this.patientLoginForm.controls;
  }
  getInputType() {
    if(this.showPassword){
      return 'text'
    } else {
      return 'password'
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
