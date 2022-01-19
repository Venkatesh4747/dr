import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false
  backgroundImage : string = 'assets/images/drApp.png';
  showPassword : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
   
  get f(){
    return this.loginForm.controls;
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
