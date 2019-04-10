import {Component, Inject, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {MatSort, MatSortable, MatSortHeaderIntl, Sort, SortDirection} from "@angular/material";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sort-header, [app-sort-header]',
  templateUrl: './custom-sort.component.html',
  styleUrls: ['./custom-sort.component.scss']
})
export class CustomSortComponent implements MatSortable, OnInit, OnDestroy{
  @Input() sortUpIcon: string = "fa fa-caret-up";
  @Input() sortDownIcon: string = "fa fa-caret-down";
  @Input('mat-sort-header') id: string;
  @Input() start: "asc" | "desc";
  @Input() disableClear: boolean;

  private sortSubscription: Subscription;
  direction: SortDirection;

  constructor(public header: MatSortHeaderIntl,
              @Optional() public matSort: MatSort,
              @Inject('MAT_SORT_HEADER_COLUMN_DEF') @Optional()
              public column: {name: string}) {
  }

  ngOnInit(): void {
    if (!this.id && this.column) {
      this.id = this.column.name;
    }
    this.matSort.register(this);
    this.sortSubscription = this.matSort.sortChange.subscribe((sort: Sort) => {
      this.direction = sort.active === this.id ? sort.direction : '';
    });
  }

  ngOnDestroy(): void {
    this.matSort.deregister(this);
    this.sortSubscription.unsubscribe();
  }

  onSortButtonClick() {
    this.matSort.sort(this.matSort.sortables.get(this.id));
  }
}
