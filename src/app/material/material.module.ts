import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';



const materials = [
  CommonModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: materials,
  exports: materials,
})
export class MaterialModule { }
