import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layouts',
  templateUrl: './admin-layouts.component.html',
  styleUrls: ['./admin-layouts.component.css']
})
export class AdminLayoutsComponent implements OnInit {
  sidebarToggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggleFunction(value: string) {
    if (value == "toggled") {
      this.sidebarToggle = true;
    }
    setTimeout(() => {
      this.sidebarToggle = false;
    }, 50);
  }



}
