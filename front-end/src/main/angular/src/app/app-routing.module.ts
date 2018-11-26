import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: "./modules/home/home.module#HomeModule"},
  { path: 'operations', loadChildren: "./modules/operations/operations.module#OperationsModule", canActivate: [AuthGuard] },
  { path: 'categories', loadChildren: "./modules/categories/category.module#CategoryModule", canActivate: [AuthGuard] },
  { path: 'user', loadChildren: "./modules/user/user.module#UserModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
