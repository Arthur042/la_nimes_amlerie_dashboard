import { Component, OnInit } from '@angular/core';
import {Recurrance} from "../../models/graph1";
import {StatsService} from "../../services/stats.service";

@Component({
  selector: 'app-graph-abandon',
  templateUrl: './graph-abandon.component.html',
  styleUrls: ['./graph-abandon.component.css']
})
export class GraphAbandonComponent implements OnInit {
  single : Recurrance[] = [];
  ngOnInit(): void {
    this.statsService.getAbandonned().subscribe(data => {
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
