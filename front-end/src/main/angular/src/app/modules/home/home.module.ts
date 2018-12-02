import {NgModule} from '@angular/core';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {HomeRoutesModule} from "./home.route";
import {SharedModule} from "../../shared/shared.module";
import { BudgetChartComponent } from './components/budget-chart/budget-chart.component';

@NgModule({
  imports: [
    HomeRoutesModule,
    SharedModule
  ],
  declarations: [
    LandingPageComponent,
    BudgetChartComponent
  ]
})
export class HomeModule { }
