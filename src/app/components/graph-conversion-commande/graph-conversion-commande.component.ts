import { Component, OnInit } from '@angular/core';
import { Graph1 } from 'src/app/models/graph1';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-graph-conversion-commande',
  templateUrl: './graph-conversion-commande.component.html',
  styleUrls: ['./graph-conversion-commande.component.css']
})
export class GraphConversionCommandeComponent implements OnInit {
  single : Graph1[] = [
    {
      "name": "Paniers non converti",
      "value": 861
    },
    {
      "name": "Paniers converti",
      "value": 564
    },
  ];
  ngOnInit(): void {
  }
  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  constructor(private statsService: StatsService) { }
  

}
