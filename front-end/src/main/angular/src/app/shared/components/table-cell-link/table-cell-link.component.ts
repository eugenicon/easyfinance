import {Component} from '@angular/core';
import {CellDescription, TableCell} from "../table/table.component";

export class LinkCell<T> implements CellDescription<T> {
  constructor(public link: (i: T) => string) { }

  getCellType() {
    return TableCellLinkComponent;
  }
}

@Component({
  selector: 'app-table-cell-link',
  templateUrl: './table-cell-link.component.html',
  styleUrls: ['./table-cell-link.component.css']
})
export class TableCellLinkComponent<T> extends TableCell<T> {

}
