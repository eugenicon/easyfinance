import {NgModule} from "@angular/core";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {CategoryRoutesModule} from "./category-routes.module";
import {SharedModule} from "../../shared/shared.module";
import {SaveCategoryDialogComponent} from "./components/save-category-dialog/save-category-dialog.component";

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
    SaveCategoryDialogComponent
  ]
})
export class CategoryModule { }
