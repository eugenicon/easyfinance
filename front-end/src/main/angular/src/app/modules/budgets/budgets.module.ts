import {NgModule} from '@angular/core';
import {BudgetsComponent} from './pages/budgets/budgets.component';
import {SaveBudgetDialogComponent} from './components/save-budget-dialog/save-budget-dialog.component';
import {SharedModule} from "../../shared/shared.module";
import {BudgetsRoutesModule} from "./budgets-routes.module";
import {SaveCategoryDialogComponent} from "../categories/components/save-category-dialog/save-category-dialog.component";
import {CategoryModule} from "../categories/category.module";

@NgModule({
  imports: [
    SharedModule,
    BudgetsRoutesModule,
    CategoryModule
  ],
  declarations: [BudgetsComponent, SaveBudgetDialogComponent],
  entryComponents: [
    SaveBudgetDialogComponent,
    SaveCategoryDialogComponent
  ]
})
export class BudgetsModule { }
