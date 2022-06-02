import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-graph-visite',
  templateUrl: './graph-visite.component.html',
  styleUrls: ['./graph-visite.component.css']
})
export class GraphVisiteComponent {
  multi: any[] = [
    {
      "name": "Nb nouveau client",
      "series": [
        {
          "name": "1",
          "value": 26
        },
        {
          "name": "5",
          "value": 50
        },
        {
          "name": "10",
          "value": 45
        },
        {
          "name": "15",
          "value": 26
        },
        {
          "name": "20",
          "value": 80
        },
        {
          "name": "25",
          "value": 76
        },
        {
          "name": "30",
          "value": 86
        }
      ]
    },
    {
      "name": "Nb visite",
      "series": [
        {
          "name": "1",
          "value": 156
        },
        {
          "name": "5",
          "value": 113
        },
        {
          "name": "10",
          "value": 158
        },
        {
          "name": "15",
          "value": 80
        },
        {
          "name": "20",
          "value": 200
        },
        {
          "name": "25",
          "value": 169
        },
        {
          "name": "30",
          "value": 175
        }
      ]
    }
  ];

  // options
  below = LegendPosition.Right;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Nombre de visite';
  timeline: boolean = true;
  

  constructor() { }

}