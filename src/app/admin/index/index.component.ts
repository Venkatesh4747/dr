import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NbMenuItem, NbMenuService, NbSidebarComponent, NbSidebarService, NB_WINDOW } from '@nebular/theme';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(NbSidebarComponent, {static: true}) nbSideBar!: NbSidebarComponent;
  state!: string;
  showMenu: boolean = true;
  showImage: boolean = true;
  AdminName: string = 'Sarah Smith';
  AdminRole: string = 'Admin';
  logo: string = 'assets/images/logo.png';
  image: string = 'assets/images/admin.jpg';
  showImg: boolean = true;


  constructor(private sidebarService: NbSidebarService) {
    this.sidebarService.getSidebarResponsiveState()
    this.sidebarService.getSidebarState();
   }

  ngOnInit(): void {
    // this.nbSideBar.collapsedBreakpoints = ['xs', 'is'];
    this.nbSideBar.responsive = true;
    // const status = this.nbSideBar.responsiveStateChange;
    // console.log('status', status);
  }

  toggle() {
    this.sidebarService.toggle(true);
  }
  onStateChange(e : any) {
    if (e == 'compacted' || e == 'collapsed'){
      this.showImage = false;
    } else {
      this.showImage = true;
    }
    if (e == 'collapsed') {
      this.showMenu = false;
    } else{
      this.showMenu = true;
    }
  }

  onResponsive(e : any) {
    console.log('this ', e);
    if ( e == 'mobile'){
      this.showImg = false;
    } else {
      this.showImg = true;
    }
  }
  items: NbMenuItem[] = [
    {
      title: 'User Management',
      icon: 'home-outline',
    },
    {
      title: 'Patients',
      icon: 'people-outline',
    },
    {
      title: 'Doctors',
      icon: 'person-outline',
    },
    {
      title: 'Appointments',
      icon: 'calendar-outline',
    },
    {
      title: 'Payment',
      icon: 'credit-card-outline',
    },
    {
      title: 'Inbox',
      icon: 'message-square-outline',
    },
    {
      title: 'Messaging',
      icon: 'message-circle-outline',
    },
    {
      title: 'Setting',
      icon: 'settings-2-outline',
    },
    {
      title: 'Logout',
      icon: 'log-out-outline',
    },
  ];
  itemsMenu : any = [
    { title: 'Logout',
      icon: 'log-out-outline'},
  ];
}
