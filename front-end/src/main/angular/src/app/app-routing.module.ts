import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {AuthenticationService} from "./services/authentication.service";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthenticationService] },

  // otherwise redirect to login page
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
