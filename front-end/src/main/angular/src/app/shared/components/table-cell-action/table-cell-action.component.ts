import {Component} from '@angular/core';
import {CellDescription, TableCell} from "../table/table.component";

export class ActionCell<T> implements CellDescription<T> {
  constructor(public action: (i: T) => void) { }

  getCellType() {
    return TableCellActionComponent;
  }
}

@Component({
  selector: 'app-table-cell-action',
  templateUrl: './table-cell-action.component.html',
  styleUrls: ['./table-cell-action.component.css']
})
export class TableCellActionComponent<T> extends TableCell<T> {

}
