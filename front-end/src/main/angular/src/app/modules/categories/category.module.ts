import {NgModule} from "@angular/core";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {CategoryRoutesModule} from "./category-routes.module";
import {SharedModule} from "../../shared/shared.module";
import {AddCategoryDialogComponent} from "./components/add-category-dialog/add-category-dialog.component";

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutesModule,
  ],
  declarations: [
    CategoriesComponent,
    AddCategoryDialogComponent
  ],
  entryComponents: [
    AddCategoryDialogComponent
  ]
})
export class CategoryModule { }
