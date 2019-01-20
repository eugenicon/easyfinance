import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {SettingsPageComponent} from "./pages/settings-page/settings-page.component";
import {AuthGuard} from "../../core/guards/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'settings', component: SettingsPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutesModule { }
