import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  naviEnd!:any;
  backgroundImage!: string;
  load: any;
  constructor(private router: Router) { 
    console.log('window', window.location.href);
    router.events.subscribe((event: any) => {
      if (event.constructor.name === 'NavigationStart') {
        this.naviEnd = event.url.split('/')
        console.log(this.naviEnd[this.naviEnd.length - 1]);
        if (this.naviEnd[this.naviEnd.length - 1] == 'login'){
          this.backgroundImage = 'assets/images/drApp.png';
        } else if(this.naviEnd[this.naviEnd.length - 1] == 'forgot-password') {
          this.backgroundImage = 'assets/images/bg-03.png'
        } else if(this.naviEnd[this.naviEnd.length - 1] == 'signup') {
          this.backgroundImage = 'assets/images/bg-02.png'
        }
      }
    });
    console.log('the sdfasdfsdf');
  }

  ngOnInit(): void {
    console.log('window', window.location.href)
    this.load = window.location.href.split('/');

    if (this.load[this.load.length - 1] == 'login'){
      this.backgroundImage = 'assets/images/drApp.png';
    } else if(this.load[this.load.length - 1] == 'forgot-password') {
      this.backgroundImage = 'assets/images/bg-03.png'
    } else if(this.load[this.load.length - 1] == 'signup') {
      this.backgroundImage = 'assets/images/bg-02.png'
    }
  }

}
