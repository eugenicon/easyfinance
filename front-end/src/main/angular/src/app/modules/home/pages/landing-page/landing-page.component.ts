import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DataService} from "../../../../core/services/data.service";
import {ChartData} from "../../../../shared/components/bar-chart/bar-chart.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  data = new BehaviorSubject<ChartData>(null);

  constructor(protected dataService: DataService) {}

  ngOnInit(): void {
    this.updateData();
  }

  private updateData() {
    this.dataService.getBudgetsReport().subscribe(data => {
      let chartData: ChartData = {dataLabels: data.map(value => value.category.name), dataSources: [
          {label: 'Fact', data: data.map( value => value.sum)},
          {label: 'Plan', data: data.map( value => value.budget ? value.budget.sum : 0)}
        ]};
      this.data.next(chartData);
    });
  }
}
