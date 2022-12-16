import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/Services/state.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private state: StateService) { }

  ngOnInit(): void {
    this.state.isProgressing = true;
    setTimeout(() => {
      this.state.isProgressing = false;
    }, 2000)
  }

  // ELEMENT_DATA: PeriodicElement[] = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079 },
  //   { position: 2, name: 'Helium', weight: 4.0026 },
  //   { position: 3, name: 'Lithium', weight: 6.941 },
  //   { position: 4, name: 'Beryllium', weight: 9.0122 },
  //   { position: 5, name: 'Boron', weight: 10.811 },
  //   { position: 6, name: 'Carbon', weight: 12.0107 },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067 },
  //   { position: 8, name: 'Oxygen', weight: 15.9994 },
  // ];
  ELEMENT_DATA = [
    { name: 'Hydrogen', weight: 1.0079 },
  ];

}
