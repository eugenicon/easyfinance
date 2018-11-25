import {Component} from '@angular/core';
import {CellDescription, TableCell} from "../table/table.component";

export class TextCell<T> implements CellDescription<T> {
  getCellType() {
    return <T>TableCellTextComponent;
  }
}

@Component({
  selector: 'app-table-cell-text',
  templateUrl: './table-cell-text.component.html',
  styleUrls: ['./table-cell-text.component.css']
})
export class TableCellTextComponent<T> extends TableCell<T> {

}
