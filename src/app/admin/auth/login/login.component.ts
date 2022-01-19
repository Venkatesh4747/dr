import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  backgroundImage : string = 'assets/images/drApp.png';
  loginForm!: FormGroup;
  showPassword : boolean = false;

  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.createForm();
  }
  
  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());
    }
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

  _v() {
    return this.loginForm.value;
  }
}
