import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';




const materials = [
  CommonModule,
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: materials,
  exports: materials,
})
export class MaterialModule { }
