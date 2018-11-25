import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {TableCell, TableColumn} from "../../components/table/table.component";
import {TableCellTextComponent, TextCell} from "../../components/table-cell-text/table-cell-text.component";

@Directive({
  selector: '[app-table-cell]'
})
export class TableCellDirective implements OnInit{
  @Input() column: TableColumn;
  @Input() item: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnInit(): void {
    let cellDescription = this.column.cell;
    if (!cellDescription) {
      cellDescription = new TextCell()
    }

    const factory = this.resolver.resolveComponentFactory(cellDescription.getCellType());
    let component: TableCell = this.container.createComponent(factory).instance;
    component.item = this.item;
    component.column = this.column;
  }

}
