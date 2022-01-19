import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  showPassword : boolean = false;
  confirmPassword : boolean = false;
  constructor() { }

  ngOnInit(): void {
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
  getInput() {
    if(this.confirmPassword){
      return 'text'
    } else {
      return 'password'
    }
  }
  toggleconfirmPassword() {
    this.confirmPassword = !this.confirmPassword;
  }
}
