import {NgModule} from "@angular/core";
import {CategoriesComponent} from "./pages/categories/categories.component";
import {CategoryRoutesModule} from "./category-routes.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutesModule
  ],
  declarations: [
    CategoriesComponent
  ]
})
export class CategoryModule { }
