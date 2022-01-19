import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.scss']
})
export class PatientSignupComponent implements OnInit {
  submitted = false;
  showPassword = false;
  showConfirmPassword = false;
  patientSignupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.min(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(8)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.patientSignupForm.controls;
  }
  getInputType() {
    if(this.showPassword){
      return 'text'
    } else {
      return 'password'
    }
  }
  getInputTypeConfirmPassword() {
    if(this.showConfirmPassword){
      return 'text'
    } else {
      return 'password'
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowconfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

}
