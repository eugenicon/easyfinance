import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, Type, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {StringUtils} from "../../../core/utils/string-utils";

export class TableCell<T> implements OnInit {
  item: any;
  column: TableColumn<T>;
  cellValue: any;

  value() {
    if (!this.cellValue) {
      this.cellValue = TableColumn.value(this.item, this.column);
    }
    return this.cellValue;
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

  static value<T>(item: any, column: TableColumn<T>) {
    //console.log(`got value for line ${item.id} col ${column.name}`);
    if (!column) return '';
    return column.value == undefined ? item[column.name] : column.value(item)
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit, AfterViewInit {
  @Input() dataProvider: Observable<T[]>;
  @Input() columns: TableColumn<T>[] = [];
  @Input() addHandler?: () => {};
  @Input() editHandler?: (it: T) => {};
  @Input() deleteHandler?: (it: T) => {};

  columnNames: string[] = [];
  columnsByName: Map<string, TableColumn<T>> = new Map<string, TableColumn<T>>();
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  isUpdating = true;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.dataSource.paginator = mp;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.updateData();
  }

  private updateData() {
    this.isUpdating = true;
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
        this.columnNames.push('_row_actions');
      }
      console.log(`data received: ${value.length}`)
      this.isUpdating = false;
    })
  }

  updateFilterValue(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  label(column: TableColumn<T>) {
    return column.title || StringUtils.capitalizeFirstLetter(column.name);
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

  private initColumns(inst: any) {
    let columns: TableColumn<T>[] = [];
    for (let key in inst) {
      columns.push({name: key})
    }
    return columns;
  }
}
