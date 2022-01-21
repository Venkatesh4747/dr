import { Component, ElementRef, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ColumnMode = ColumnMode;
  consultationCount: any;
  message: any;
  date: any;
  readonly headerHeight = 50;
  readonly rowHeight = 50;
  readonly pageLimit = 100;
  isLoading = false;
  encounterList = [{
    patientName: 'venkatesh',
    location: 'pondy',
    appointment: '21 Jan 2022, 8:40 PM'
  }];

  constructor(private el: ElementRef,) { }

  ngOnInit(): void {
    this.consultationCount = 356;
    this.message = 'John D has created appointments';
    this.date = '06:37 PM'
  }

  onScroll(offsetY: number) {
    // total height of all rows in the viewport
    const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;

    // check if we scrolled to the end of the viewport
    if (!this.isLoading && offsetY + viewHeight >= this.encounterList.length * this.rowHeight) {
      // total number of results to load
      let limit = this.pageLimit;

      // check if we haven't fetched any results yet
      if (this.encounterList.length === 0) {
        // calculate the number of rows that fit within viewport
        const pageSize = Math.ceil(viewHeight / this.rowHeight);

        // change the limit to pageSize such that we fill the first page entirely
        // (otherwise, we won't be able to scroll past it)
        limit = Math.max(pageSize, this.pageLimit);
      }
    }
  }



  getConsultationCount() {

  }

}
