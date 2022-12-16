import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './CommonComponent/sidebar/sidebar.component';
import { NavbarComponent } from './CommonComponent/navbar/navbar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/material/material.module';
import { AdminLayoutsComponent } from './Layouts/admin-layouts/admin-layouts.component';
import { DashboardSideBarElementComponent } from './CommonComponent/dashboard-side-bar-element/dashboard-side-bar-element.component';
import { AddStudentComponent } from './Pages/add-student/add-student.component';
import { TableComponent } from './CommonComponent/table/table.component';
import { ListStudentComponent } from './Pages/list-student/list-student.component';
import { MatCellDefinationPipe } from 'src/app/Pipes/mat-cell-defination.pipe';
import { CommonComponentModule } from 'src/app/common-component/common-component.module';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    AdminLayoutsComponent,
    DashboardSideBarElementComponent,
    AddStudentComponent,
    TableComponent,
    ListStudentComponent,
    MatCellDefinationPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    CommonComponentModule
  ],
  exports: [
    DashboardRoutingModule,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
