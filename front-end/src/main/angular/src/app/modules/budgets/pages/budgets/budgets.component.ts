import {Component, OnInit, Type} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ConfirmDialogComponent} from "../../../../shared/components/confirm-dialog/confirm-dialog.component";
import {DataService} from "../../../../core/services/data.service";
import {MatDialog} from "@angular/material";
import {Budget} from "../../budgets.model";
import {TableColumn} from "../../../../shared/components/table/table.component";
import {ActionCell} from "../../../../shared/components/table-cell-action/table-cell-action.component";
import {Category} from "../../../categories/category.model";
import {SaveCategoryDialogComponent} from "../../../categories/components/save-category-dialog/save-category-dialog.component";
import {SaveOperationDialogComponent} from "../../../operations/components/save-operation-dialog/save-operation-dialog.component";
import {SaveBudgetDialogComponent} from "../../components/save-budget-dialog/save-budget-dialog.component";

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {
  data = new BehaviorSubject<Budget[]>([]);

  columns: TableColumn<Budget>[] = [
    {name: "id"},
    {
      name: "category", value: it => it.category.name,
      cell: new ActionCell<Budget>(it => this.openCategoryDialog(it.category))
    },
    {name: "sum"}
  ];

  constructor(protected dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.updateData();
  }

  openSaveDialog(data: Budget = new Budget()) {
    this.openDialog(SaveBudgetDialogComponent, data);
  }

  openDeleteDialog(data: Budget) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.dataService.deleteBudget(data).subscribe(value => this.updateData())
    });
  }

  openCategoryDialog(category: Category) {
    this.openDialog(SaveCategoryDialogComponent, category);
  }

  private openDialog(dialogType: Type<any>, data: any) {
    const dialog = this.dialog.open(dialogType, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.updateData();
    });
  }

  private updateData() {
    this.dataService.getBudgets().subscribe(value => {
      this.data.next(value);
    });
  }
}
