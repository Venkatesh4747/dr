import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup;
  // submitted = false
  // fb: any;

  constructor() { }

  ngOnInit(): void {
  }

  // get f(): any {
  //   return this.loginForm.controls;
  // }

  // createForm(): void {
  //   this.loginForm = this.fb.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

}
