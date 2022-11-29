import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './CommonComponent/sidebar/sidebar.component';
import { NavbarComponent } from './CommonComponent/navbar/navbar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AdminLayoutsComponent } from './Layouts/admin-layouts/admin-layouts.component';
import { DashboardSideBarElementComponent } from './CommonComponent/dashboard-side-bar-element/dashboard-side-bar-element.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    AdminLayoutsComponent,
    DashboardSideBarElementComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  exports: [
    DashboardRoutingModule,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
