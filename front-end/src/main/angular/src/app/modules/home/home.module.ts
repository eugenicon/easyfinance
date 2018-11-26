import {NgModule} from '@angular/core';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {HomeRoutesModule} from "./home.route";

@NgModule({
  imports: [
    HomeRoutesModule
  ],
  declarations: [
    LandingPageComponent
  ]
})
export class HomeModule { }
