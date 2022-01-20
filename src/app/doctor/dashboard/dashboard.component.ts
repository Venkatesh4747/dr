import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  consultationCount: any;
  message: any;
  date: any;

  constructor() { }

  ngOnInit(): void {
    this.consultationCount = 356;
    this.message = 'John D has created appointments';
    this.date = '06:37 PM'
  }

  getConsultationCount() {

  }

}
