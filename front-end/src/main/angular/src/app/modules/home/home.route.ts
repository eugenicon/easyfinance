import {NgModule} from '@angular/core';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutesModule { }
