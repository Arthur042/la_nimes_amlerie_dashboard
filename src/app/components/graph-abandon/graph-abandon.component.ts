import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-abandon',
  templateUrl: './graph-abandon.component.html',
  styleUrls: ['./graph-abandon.component.css']
})
export class GraphAbandonComponent implements OnInit {
  multi: any[] = [
    {
      "name": "semaine 1",
      "series": [
        {
          "name": "Nombre de panier",
          "value": 200
        },
        {
          "name": "Nombre de commande",
          "value": 110
        }
      ]
    },
  
    {
      "name": "semaine 2",
      "series": [
        {
          "name": "Nombre de panier",
          "value": 320
        },
        {
          "name": "Nombre de commande",
          "value": 150
        }
      ]
    },
  
    {
      "name": "semaine 3",
      "series": [
        {
          "name": "Nombre de panier",
          "value": 240
        },
        {
          "name": "Nombre de commande",
          "value": 90
        }
      ]
    },
    {
      "name": "semaine 4",
      "series": [
        {
          "name": "Nombre de panier",
          "value": 260
        },
        {
          "name": "Nombre de commande",
          "value": 120
        }
      ]
    },
  
    {
      "name": "semaine 5",
      "series": [
        {
          "name": "Nombre de panier",
          "value": 320
        },
        {
          "name": "Nombre de commande",
          "value": 230
        }
      ]
    }
  ];
  view: any[] = [700, 400];
  abdnMoy: number = 0;

  // options
  showXAxis: boolean = false;
  showYAxis: boolean = false;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() { }
  ngOnInit(): void {
    let abdnMoy: number = 0;
    let nbPanier: number = 0;
    let nbCommand: number = 0;
    this.multi.forEach(element => {
      for (let i = 0; i < element.series.length; i++) {
        if (i == 0) {
          nbPanier = element.series[i].value;
        } else {
          nbCommand = element.series[i].value;
        }
      }     
      abdnMoy += 100-((nbCommand / nbPanier) * 100); 
    })
    this.abdnMoy = Math.round(abdnMoy / this.multi.length);
  }

}