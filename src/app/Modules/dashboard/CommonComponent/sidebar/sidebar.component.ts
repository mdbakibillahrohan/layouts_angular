import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() toggle: boolean = false;
  @ViewChild('drawer') drawer: any;

  DashboardElement: any[] = [
    {
      name: "Add Student",
      route: "add-student",

    },
    {
      name: "List Student",
      route: "list-student",
    },
  ]
  constructor() { }



  ngOnInit(): void {

  }



  ngOnChanges() {
    if (this.toggle == true) {
      this.drawer.toggle();
    }
  }






}
