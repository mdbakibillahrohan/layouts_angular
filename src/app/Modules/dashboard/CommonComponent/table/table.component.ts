import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCellDefinationPipe } from 'src/app/Pipes/mat-cell-defination.pipe';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  @Input() title = "";
  @Input() data: object[] = [];

  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  displayedColumns: string[] = [];
  dataSource: object[] = [];


  constructor() {

  }

  ngOnInit(): void {
    let keys = Object.keys(this.data[0]);
    this.displayedColumns = [];
    this.displayedColumns.push('sl_no');
    for (let i = 0; i < keys.length; i++) {
      this.displayedColumns.push(keys[i]);
    }
    this.displayedColumns.push('action');

    setTimeout(() => {
      this.dataSource = this.data;
    }, 100);

  }

  delete(id: number) {
    this.onDelete.emit(id);
  }

  edit(id: number) {
    this.onEdit.emit(id);
  }

  changePaginationPage(data: any) {
    console.log(data);
  }


}

