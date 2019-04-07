import {Component, Inject, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {MatCheckboxChange, MatSort, MatTable, MatTableDataSource, Sort, SortDirection} from "@angular/material";
import * as deepEqual from "deep-equal";
import {Subscription} from "rxjs";

export class FilterItem {
  value: any;
  label?: string = this.value;
  checked?: boolean = true;
}

@Component({
  selector: '[app-filter-header]',
  templateUrl: './filter-toggle.component.html',
  styleUrls: ['./filter-toggle.component.scss']
})
export class FilterToggleComponent implements OnInit, OnDestroy {
  @Input() filterIcon: string = 'fa fa-filter';
  values: FilterItem[];

  private dataSource: MatTableDataSource<any>;
  private filterJsonBlueprint: string = '';
  private sortDirection: SortDirection = '';
  private sortSubscription: Subscription;

  constructor(table: MatTable<any>,
              @Optional() public matSort: MatSort,
              @Inject('MAT_SORT_HEADER_COLUMN_DEF') @Optional()
              private column: { name: string }) {

    this.dataSource = (<MatTableDataSource<any>>table.dataSource);
  }

  @Input('app-filter-header')
  set initFilterItems(values: () => FilterItem[]) {
    this.values = values();
    this.values.forEach(value => {
      value.label = value.label === undefined ? value.value : value.label;
      value.checked = value.checked === undefined ? true : value.checked;
    });
    this.filterJsonBlueprint = JSON.stringify(this.values);
  }

  ngOnInit() {
    const filterChain = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data, filter) => {
      const matches = this.values
        .filter(value => !value.checked)
        .every(value => !deepEqual(data[this.column.name], value.value));
      return matches && filterChain.apply(this, [data, filter]);
    };
    this.sortSubscription = this.matSort.sortChange.subscribe((sort: Sort) => {
      this.sortDirection = sort.active === this.column.name ? sort.direction : '';
    });
  }

  applyFilter($event: MatCheckboxChange, item: FilterItem) {
    item.checked = $event.checked;
    this.dataSource.filter = JSON.stringify(this.values);
  }

  hasChanges() {
    return this.sortDirection != '' || JSON.stringify(this.values) != this.filterJsonBlueprint;
  }

  ngOnDestroy(): void {
    this.sortSubscription.unsubscribe();
  }
}
