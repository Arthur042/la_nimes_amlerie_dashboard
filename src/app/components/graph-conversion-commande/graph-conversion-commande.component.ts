import { Component, OnInit } from '@angular/core';
import { Recurrance } from 'src/app/models/graph1';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-graph-conversion-commande',
  templateUrl: './graph-conversion-commande.component.html',
  styleUrls: ['./graph-conversion-commande.component.css']
})
export class GraphConversionCommandeComponent implements OnInit {
  single : Recurrance[] = [];
  ngOnInit(): void {
    this.statsService.getConvert().subscribe(data => {
        this.single = data;
      }
    )
  }
  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  constructor(private statsService: StatsService) { }


}
