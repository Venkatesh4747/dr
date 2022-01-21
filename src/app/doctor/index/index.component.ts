import { Component, OnInit, ViewChild } from '@angular/core';
import { NbMenuItem, NbSidebarComponent, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(NbSidebarComponent, {static: true}) nbSideBar!: NbSidebarComponent;
  flag = true;
  profileImage: any;
  doctorName: string;
  doctorRole: string;
  showImage = true;
  showMenu = true;
  showImg = true;
  logo: string = 'assets/images/logo.png';
  
  constructor(private sidebarService: NbSidebarService) { 
    this.sidebarService.getSidebarResponsiveState();
    this.sidebarService.getSidebarState();
    this.profileImage = 'assets/images/doc.jpg';
    this.doctorName = 'John JD';
    this.doctorRole = 'Doctor';
    
  }

  ngOnInit(): void {
    this.nbSideBar.responsive = true;

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

  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/doctor/dashboard'
    },
    {
      title: 'Appoinments',
      icon: 'calendar-outline',
      link: '/doctor/appointments'
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
  itemsMenu : any = [
    { 
      title: 'Logout',
      icon: 'log-out-outline'
    },
  ];

  onStateChange(event: any) {
    if (event == 'compacted' || event == 'collapsed'){
      this.showImage = false;
    } else {
      this.showImage = true;
    }
    if (event == 'collapsed') {
      this.showMenu = false;
    } else{
      this.showMenu = true;
    }

  }

  onResponsive(event: any) {
    console.log('this ', event);
    if ( event == 'mobile'){
      this.showImg = false;
    } else {
      this.showImg = true;
    }

  }

  onClick() {

  }


}
