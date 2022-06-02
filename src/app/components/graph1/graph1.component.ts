
import { Component, OnInit } from '@angular/core';
import { Graph1 } from 'src/app/models/graph1';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {
  single : Graph1[] = [
    {
      "name": "Nouveau client",
      "value": 136
    },
    {
      "name": "Client existant",
      "value": 195
    },
  ];
  ngOnInit(): void {
  }
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  constructor(private statsService: StatsService) { }
  

}