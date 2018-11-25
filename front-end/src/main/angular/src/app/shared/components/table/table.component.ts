import {Component, Input, OnInit, Type, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";

export class TableCell<T> implements OnInit {
  item: any;
  column: TableColumn<T>;

  value() {
    return TableColumn.value(this.item, this.column)
  }

  ngOnInit(): void {
  }
}

export interface CellDescription<T> {
  getCellType(): Type<TableCell<T>>;
}

export class TableColumn<T> {
  name: string;
  title?: string;
  value?: (item: T) => {};
  cell?: CellDescription<T>;

  static  value<T>(item: any, column: TableColumn<T>) {
    return column.value == undefined ? item[column.name] : column.value(item)
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T> implements OnInit {
  @Input() dataProvider: Observable<T[]>;
  @Input() columns: TableColumn<T>[] = [];
  columnNames: string[] = [];
  columnsByName: Map<string, TableColumn<T>> = new Map<string, TableColumn<T>>();
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
      this.dataSource.sortingDataAccessor = this.retrieveValueForSorting.bind(this);
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

  label(column: TableColumn<T>) {
    return column.title || this.capitalizeFirstLetter(column.name);
  }

  private applyFilter(data: any, filter: string) {
    let dataAsStringProperty = '_dataAsString';
    let dataAsString: string = data[dataAsStringProperty];

    if (!dataAsString) {
      let accumulator = (string, key) => string + '◬' + TableColumn.value(data, this.columnsByName.get(key));
      dataAsString = this.columnNames.reduce(accumulator, '').toLowerCase();
    }

    return dataAsString.match(filter);
  }

  private retrieveValueForSorting(data: any, key: string) {
    return TableColumn.value(data, this.columnsByName.get(key));
  }

  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  private initColumns(inst: any) {
    let columns: TableColumn<T>[] = [];
    for (let key in inst) {
      columns.push({name: key})
    }
    return columns;
  }
}
