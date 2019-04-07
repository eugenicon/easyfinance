import {Component, OnInit, Type} from '@angular/core';
import {DataService} from "../../../../core/services/data.service";
import {TableColumn} from "../../../../shared/components/table/table.component";
import {Operation} from "../../operation.model";
import {BehaviorSubject} from "rxjs";
import {Category} from "../../../categories/category.model";
import {SaveCategoryDialogComponent} from "../../../categories/components/save-category-dialog/save-category-dialog.component";
import {MatDialog} from "@angular/material";
import {SaveOperationDialogComponent} from "../../components/save-operation-dialog/save-operation-dialog.component";
import {ActionCell} from "../../../../shared/components/table-cell-action/table-cell-action.component";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {distinct} from "../../../../shared/utils/lambda-utilities";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  data = new BehaviorSubject<Operation[]>([]);

  columns: TableColumn<Operation>[] = [
    {name: "id"},
    {
      name: "category", value: it => it.category.name,
      cell: new ActionCell<Operation>(it => this.openCategoryDialog(it.category)),
      filter: () => this.data.getValue()
        .filter(distinct(a => a.category.id))
        .map(a => ({ value: a.category, label: a.category.name}) )
    },
    {
      name: "description",
      filter: () => this.data.getValue()
        .filter(distinct('description'))
        .map(a => ({ value: a.description}) )
    },
    {name: "sum"},
  ];

  constructor(protected dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.updateData();
  }

  openCategoryDialog(category: Category) {
    this.openDialog(SaveCategoryDialogComponent, category);
  }

  openSaveDialog(data: Operation = new Operation()) {
    this.openDialog(SaveOperationDialogComponent, data);
  }

  openDeleteDialog(data: Operation) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.dataService.deleteOperation(data).subscribe(() => this.updateData())
    });
  }

  private openDialog(dialogType: Type<any>, data: any) {
    const dialog = this.dialog.open(dialogType, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.updateData();
    });
  }

  private updateData() {
    this.dataService.getOperations().subscribe(value => {
      this.data.next(value);
    });
  }
}
