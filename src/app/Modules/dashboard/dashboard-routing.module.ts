import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './Layouts/admin-layouts/admin-layouts.component';
import { AddStudentComponent } from './Pages/add-student/add-student.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutsComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "add-student",
        component: AddStudentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
