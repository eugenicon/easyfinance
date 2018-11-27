import {NgModule} from "@angular/core";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {CategoryRoutesModule} from "./category-routes.module";
import {SharedModule} from "../../shared/shared.module";
import {SaveCategoryDialogComponent} from "./components/save-category-dialog/save-category-dialog.component";
import {ConfirmDialogComponent} from "../../shared/components/confirm-dialog/confirm-dialog.component";

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutesModule,
  ],
  declarations: [
    CategoriesComponent,
    SaveCategoryDialogComponent
  ],
  entryComponents: [
    SaveCategoryDialogComponent,
    ConfirmDialogComponent
  ]
})
export class CategoryModule { }
