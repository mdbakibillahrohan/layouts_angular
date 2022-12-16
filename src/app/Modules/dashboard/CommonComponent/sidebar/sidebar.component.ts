import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() toggle: boolean = false;
  @ViewChild('drawer') drawer: any;



  SidebarElements: any[] = [
    {
      name: "Dashboard",
      icon: 'home',
      elements: [],
    },

    {
      name: 'Students',
      icon: 'account_box',
      elements: [
        {
          name: "Add Student",
          route: "add-student",
          icon: "create_new_folder"
        },
        {
          name: "List of Students",
          route: "list-student",
          icon: 'business'
        },
        {
          name: "Edit Students",
          route: "list-student",
          icon: 'business'
        },
      ]
    },
  ];



  DashboardElement: any[] = [
    {
      name: "Add",
      route: "add-student",
      icon: 'create_new_folder'

    },

    {
      name: "List",
      route: "list-student",
      icon: 'business'
    },
  ];

  StudentElement: any[] = [
    {
      name: "Add Student",
      route: "add-student",
      icon: "create_new_folder"
    },
    {
      name: "List of Students",
      route: "list-student",
      icon: 'business'
    },
    {
      name: "Edit Students",
      route: "list-student",
      icon: 'business'
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
