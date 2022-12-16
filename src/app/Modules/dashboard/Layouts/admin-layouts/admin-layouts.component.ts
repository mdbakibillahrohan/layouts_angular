import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-admin-layouts',
  templateUrl: './admin-layouts.component.html',
  styleUrls: ['./admin-layouts.component.css']
})
export class AdminLayoutsComponent implements OnInit {
  sidebarToggle = false;
  constructor(public state: StateService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }



  sidebarToggleFunction(value: string) {
    if (value == "toggled") {
      this.sidebarToggle = true;
    }
    setTimeout(() => {
      this.sidebarToggle = false;
    }, 50);
  }

  progressIndicatorToggle(data: boolean) {
    this.state.isProgressing = data;
  }


}
