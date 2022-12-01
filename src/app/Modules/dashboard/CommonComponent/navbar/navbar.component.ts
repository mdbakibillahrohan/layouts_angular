import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sideBarToggleEmit: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  isCollapsed = false;
  sideBarToggle() {
    this.sideBarToggleEmit.emit("toggled");
    if (this.isCollapsed == false) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
  }

}
