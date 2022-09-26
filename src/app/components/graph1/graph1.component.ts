
import { Component, OnInit } from '@angular/core';
import {Recurrance} from 'src/app/models/graph1';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {
  single : Recurrance[] = [];
  ngOnInit(): void {
    this.statsService.getRecurance().subscribe(data => {
        this.single = data;
      }
    )
  }
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  constructor(private statsService: StatsService) { }


}
