import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: "./modules/home/home.module#HomeModule"},
  { path: 'operations', loadChildren: "./modules/operations/operations.module#OperationsModule" },
  { path: 'categories', loadChildren: "./modules/categories/category.module#CategoryModule" },
  { path: 'user', loadChildren: "./modules/user/user.module#UserModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
