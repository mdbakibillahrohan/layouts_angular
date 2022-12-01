import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-side-bar-element',
  templateUrl: './dashboard-side-bar-element.component.html',
  styleUrls: ['./dashboard-side-bar-element.component.css']
})
export class DashboardSideBarElementComponent implements OnInit {

  @Input() Name: string = "Default";
  @Input() List: any = [];
  @Input() Icon: string = "home";
  @Input() IsActive: boolean = false;

  panelOpenState = false;



  constructor() { }

  ngOnInit(): void {
  }

}
