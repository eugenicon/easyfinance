import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";

export class TableColumn {
  name: string;
  title?: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataProvider: Observable<any[]>
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  columns: TableColumn[] = [];

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }

  ngOnInit() {
    this.dataProvider.subscribe(value => {
      this.dataSource.data = value;
      if (value.length) {
        this.columns = this.initColumns(value[0]);
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  columnNames(columns: TableColumn[]) {
    return columns.map(c => c.name)
  }

  label(column: TableColumn) {
    return column.title || this.capitalizeFirstLetter(column.name);
  }

  initColumns(inst: any) {
    let columns: TableColumn[] = [];
    for (let key in inst) {
      columns.push({name: key})
    }
    return columns;
  }
}
