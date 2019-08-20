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
import {SaveBudgetDialogComponent} from "../../../dialog/components/save-budget-dialog/save-budget-dialog.component";
import {switchMap} from "rxjs/operators";
import {ModuleLoaderService} from "../../../../shared/services/module-loader/module-loader.service";

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

  constructor(protected dataService: DataService, public dialog: MatDialog,
              private moduleLoader: ModuleLoaderService) { }

  ngOnInit(): void {
    this.updateData();
  }

  openSaveDialog(data: Budget = new Budget()) {
    this.openDialog(SaveBudgetDialogComponent, data);
  }

  openDeleteDialog(data: Budget) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {width: '300px', data: data});

    dialog.afterClosed().subscribe(result => {
      if (result) this.dataService.deleteBudget(data).subscribe(() => this.updateData())
    });
  }

  openCategoryDialog(category: Category) {
    this.openDialog(SaveCategoryDialogComponent, category);
  }

  private openDialog(dialogType: Type<any>, data: any) {
    this.moduleLoader.loadModule("modules/dialog/dialog.module#DialogModule").pipe(
      switchMap(() => {
        const dialog = this.dialog.open(dialogType, {width: '300px', data: data});
        return dialog.afterClosed();
      })
    ).subscribe(result => {
      if (result) this.updateData();
    });
  }

  private updateData() {
    this.dataService.getBudgets().subscribe(value => {
      this.data.next(value);
    });
  }
}
