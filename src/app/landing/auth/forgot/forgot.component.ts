import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  submitted = false;
  forgotForm = new FormGroup({
    mobileNumber: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }
  get f(){
    return this.forgotForm.controls;
  }

}
