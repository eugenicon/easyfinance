import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";

export class TableColumn {
  name: string;
  title?: string;
  value?: (item) => {};
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() dataProvider: Observable<any[]>;
  @Input() columns: TableColumn[] = [];
  columnNames: string[] = [];
  columnsByName: Map<string, TableColumn> = new Map<string, TableColumn>();
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }

  ngOnInit() {
    this.dataProvider.subscribe(value => {
      this.dataSource.data = value;
      this.dataSource.filterPredicate = this.applyFilter.bind(this);
      if (value.length && this.columns.length == 0) {
        this.columns = this.initColumns(value[0]);
      }
      if (this.columns.length && this.columnsByName.size == 0) {
        this.columns.forEach(c => {
          this.columnNames.push(c.name);
          this.columnsByName.set(c.name, c);
        });
      }
    })
  }

  updateFilterValue(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  applyFilter(data: any, filter: string) {
    let accumulator = (string, key) => { return string + '◬' + this.value(data, this.columnsByName.get(key)); };

    let dataAsString = this.columnNames.reduce(accumulator, '').toLowerCase();

    return dataAsString.indexOf(filter) != -1;
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  label(column: TableColumn) {
    return column.title || this.capitalizeFirstLetter(column.name);
  }

  value(item: any, column: TableColumn) {
    return column.value == undefined ? item[column.name] : column.value(item)
  }

  initColumns(inst: any) {
    let columns: TableColumn[] = [];
    for (let key in inst) {
      columns.push({name: key})
    }
    return columns;
  }
}
