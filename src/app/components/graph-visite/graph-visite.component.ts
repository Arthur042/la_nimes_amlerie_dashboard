import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { curveCatmullRom } from 'd3-shape';

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
          "name": "2",
          "value": 50
        },
        {
          "name": "3",
          "value": 45
        },
        {
          "name": "4",
          "value": 26
        },
        {
          "name": "5",
          "value": 80
        },
        {
          "name": "6",
          "value": 76
        },
        {
          "name": "7",
          "value": 86
        },
        {
          "name": "8",
          "value": 55
        },
        {
          "name": "9",
          "value": 73
        },
        {
          "name": "10",
          "value": 15
        },
        {
          "name": "11",
          "value": 26
        },
        {
          "name": "12",
          "value": 50
        },
        {
          "name": "13",
          "value": 45
        },
        {
          "name": "14",
          "value": 26
        },
        {
          "name": "15",
          "value": 80
        },
        {
          "name": "16",
          "value": 76
        },
        {
          "name": "17",
          "value": 86
        },
        {
          "name": "18",
          "value": 55
        },
        {
          "name": "19",
          "value": 73
        },
        {
          "name": "20",
          "value": 15
        },
        {
          "name": "21",
          "value": 26
        },
        {
          "name": "22",
          "value": 50
        },
        {
          "name": "23",
          "value": 45
        },
        {
          "name": "24",
          "value": 26
        },
        {
          "name": "25",
          "value": 80
        },
        {
          "name": "26",
          "value": 76
        },
        {
          "name": "27",
          "value": 86
        },
        {
          "name": "28",
          "value": 55
        },
        {
          "name": "29",
          "value": 73
        },
        {
          "name": "30",
          "value": 15
        },
      ]
    },
    {
      "name": "Nb visite",
      "series": [
        {
          "name": "1",
          "value": 59
        },
        {
          "name": "2",
          "value": 123
        },
        {
          "name": "3",
          "value": 145
        },
        {
          "name": "4",
          "value": 93
        },
        {
          "name": "5",
          "value": 169
        },
        {
          "name": "6",
          "value": 136
        },
        {
          "name": "7",
          "value": 98
        },
        {
          "name": "8",
          "value": 78
        },
        {
          "name": "9",
          "value": 120
        },
        {
          "name": "10",
          "value": 90
        },
        {
          "name": "11",
          "value": 110
        },
        {
          "name": "12",
          "value": 100
        },
        {
          "name": "13",
          "value": 120
        },
        {
          "name": "14",
          "value": 90
        },
        {
          "name": "15",
          "value": 110
        },
        {
          "name": "16",
          "value": 100
        },
        {
          "name": "17",
          "value": 120
        },
        {
          "name": "18",
          "value": 90
        },
        {
          "name": "19",
          "value": 198
        },
        {
          "name": "20",
          "value": 46
        },
        {
          "name": "21",
          "value": 78
        },
        {
          "name": "22",
          "value": 90
        },
        {
          "name": "23",
          "value": 110
        },
        {
          "name": "24",
          "value": 100
        },
        {
          "name": "25",
          "value": 149
        },
        {
          "name": "26",
          "value": 136
        },
        {
          "name": "27",
          "value": 210
        },
        {
          "name": "28",
          "value": 142
        },
        {
          "name": "29",
          "value": 98
        },
        {
          "name": "30",
          "value": 120
        },
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
  xAxisLabel: string = 'Jour du mois';
  yAxisLabel: string = 'Nombre de visite';
  timeline: boolean = true;
  curve = curveCatmullRom;
  

  constructor() { }

}