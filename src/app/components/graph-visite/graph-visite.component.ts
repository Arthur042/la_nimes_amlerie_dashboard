import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { curveCatmullRom } from 'd3-shape';
import {StatsService} from "../../services/stats.service";

@Component({
  selector: 'app-graph-visite',
  templateUrl: './graph-visite.component.html',
  styleUrls: ['./graph-visite.component.css']
})
export class GraphVisiteComponent {
  multi: any[] = [];

  ngOnInit(): void {
    this.statsService.getNewUser().subscribe(data => {
        this.multi = data;
      }
    )
  }

  // options
  below = LegendPosition.Right;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Jour du mois';
  yAxisLabel: string = 'Nombre de visite';
  timeline: boolean = true;
  curve = curveCatmullRom;


  constructor(private statsService: StatsService) { }

}
