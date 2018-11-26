import {NgModule} from '@angular/core';
import {OperationsComponent} from "./pages/operations/operations.component";
import {SharedModule} from "../../shared/shared.module";
import {OperationsRoutesModule} from "./operations.route";
import {SaveOperationDialogComponent} from "./components/save-operation-dialog/save-operation-dialog.component";
import {SaveCategoryDialogComponent} from "../categories/components/save-category-dialog/save-category-dialog.component";
import {CategoryModule} from "../categories/category.module";

@NgModule({
  imports: [
    SharedModule,
    OperationsRoutesModule,
    CategoryModule
  ],
  declarations: [
    OperationsComponent,
    SaveOperationDialogComponent
  ],
  entryComponents: [
    SaveOperationDialogComponent,
    SaveCategoryDialogComponent
  ]
})
export class OperationsModule { }
