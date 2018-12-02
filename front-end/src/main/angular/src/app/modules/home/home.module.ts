import {NgModule} from '@angular/core';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {HomeRoutesModule} from "./home.route";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    HomeRoutesModule,
    SharedModule
  ],
  declarations: [
    LandingPageComponent
  ]
})
export class HomeModule { }
