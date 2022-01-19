import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  flag : boolean = true;
  constructor(private sidebarService: NbSidebarService) {
    // this.sidebarService.toggle(true);
    // this.sidebarService.expand()
   }

  ngOnInit(): void {
  }

  toggle(){
    if(this.flag){
      this.sidebarService.toggle(true)
      this.flag = false;
    } else {
      this.sidebarService.toggle(false)
      this.flag = true;
    }
  }
}
