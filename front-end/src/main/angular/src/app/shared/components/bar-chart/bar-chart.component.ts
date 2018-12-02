import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";

export interface ChartSource {
  label: string
  data: number[]
}

export interface ChartData {
  dataLabels: string[]
  dataSources: ChartSource[]
}

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent<T>  implements AfterViewInit, OnInit {
  @Input() dataProvider: Observable<ChartData>;
  isUpdating = true;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartLabels:string[] = [];
  public barChartData:any[] = [];

  ngOnInit(): void {
    this.updateData();
  }

  ngAfterViewInit(): void {

  }

  private updateData() {
    this.isUpdating = true;
    this.dataProvider.subscribe(value => {
      if (value) {
        this.barChartData = value.dataSources;
        this.barChartLabels = value.dataLabels;
        this.isUpdating = false;
      }
    });
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
