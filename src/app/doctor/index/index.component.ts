import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  flag = true;
  profileImage: any;
  doctorName: string;
  doctorRole: string;
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/doctor/dashboard'
    },
    {
      title: 'Appoinments',
      icon: 'calendar-outline',
      link: '/doctor/appoinments'
    },
    {
      title: 'Notification',
      icon: { icon: 'twitter-outline' },
    },
    {
      title: 'Patients',
      icon: 'person-outline',
    },
    {
      title: 'My Availability',
      icon: 'info-outline',
    },
    {
      title: 'Inbox',
      icon: 'paper-plane-outline',
    },
    {
      title: 'Transactions',
      icon: 'shield-outline',
    },
    {
      title: 'Settings',
      icon: 'settings-outline',
    },
    {
      title: 'Get Support',
      icon: 'headphones-outline',
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];


  

  constructor(private sidebarService: NbSidebarService) { 
    this.profileImage = 'assets/images/doc.jpg';
    this.doctorName = 'John JD';
    this.doctorRole = 'Doctor';
  }

  ngOnInit(): void {

  }

  toggle() {
    console.log('the flag', this.flag);
    if(this.flag){
      this.flag = false;
      this.sidebarService.toggle(true, 'left');
    } else {
      this.flag = true;
      this.sidebarService.toggle(true, 'left');
    }
  }


  onClick() {

  }


}
