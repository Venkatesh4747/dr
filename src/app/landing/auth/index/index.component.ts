import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  naviEnd: any;
  backgroundImage: any;
  load: any;

  constructor(private route: Router) {
    route.events.subscribe((event: any) => {
      console.log('the event', event);
      if (event.constructor.name === 'NavigationStart') {
        console.log('the event url', event.url);
        this.naviEnd = event.url.split('/');
        // console.log('the navi end11111111', this.naviEnd.length - 1);  
        // console.log('the navi end2222222', this.naviEnd[this.naviEnd.length - 1]); 
        // console.log('the navi end', this.naviEnd);
        if (this.naviEnd[this.naviEnd.length - 1] == 'login') {
          this.backgroundImage = 'assets/images/drApp.png';
        } else if (this.naviEnd[this.naviEnd.length - 1] == 'forgot-password') {
          this.backgroundImage = 'assets/images/bg-03.png';
        } else if (this.naviEnd[this.naviEnd.length - 1] == 'doctor-signup') {
          this.backgroundImage = 'assets/images/bg-02.png';
        } else if (this.naviEnd[this.naviEnd.length - 1] == 'patient-login') {
          this.backgroundImage = 'assets/images/drApp.png';
        } else if (this.naviEnd[this.naviEnd.length - 1] == 'patient-signup') {
          this.backgroundImage = 'assets/images/bg-02.png';
        } 
      }
    });
  }

  ngOnInit(): void {
    this.load = window.location.href.split('/');
    console.log('the load', this.load);
    console.log('the load', this.load[this.load.length - 1] );

    if (this.load[this.load.length - 1] == 'login'){
      this.backgroundImage = 'assets/images/drApp.png';
    } else if(this.load[this.load.length - 1] == 'forgot-password') {
      this.backgroundImage = 'assets/images/bg-03.png';
    } else if(this.load[this.load.length - 1] == 'doctor-signup') {
      this.backgroundImage = 'assets/images/bg-03.png';
    } else if(this.load[this.load.length - 1] == 'patient-login') {
      this.backgroundImage = 'assets/images/drApp.png';
    } else if(this.load[this.load.length - 1] == 'patient-signup') {
      this.backgroundImage = 'assets/images/bg-02.png';
    }
  }

}
