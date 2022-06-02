import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-graph-conversion-panier',
  templateUrl: './graph-conversion-panier.component.html',
  styleUrls: ['./graph-conversion-panier.component.css']
})
export class GraphConversionPanierComponent implements OnInit {
  multi: any[] = [{
      "name": "Nb visite",
      "series": [{
          "name": "semaine 1",
          "value": 326
        },
        {
          "name": "semaine 2",
          "value": 456
        },
        {
          "name": "semaine 3",
          "value": 521
        },
        {
          "name": "semaine 4",
          "value": 297
        },
        {
          "name": "semaine 5",
          "value": 412
        }
      ]
    },

    {
      "name": "Nb Panier",
      "series": [{
          "name": "semaine 1",
          "value": 213
        },
        {
          "name": "semaine 2",
          "value": 214
        },
        {
          "name": "semaine 3",
          "value": 239
        },
        {
          "name": "semaine 4",
          "value": 153
        },
        {
          "name": "semaine 5",
          "value": 291
        }
      ]
    },
  ];
  abdnMoy: number = 0;
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = false;
  timeline: boolean = true;

  constructor() {}
  ngOnInit(): void {
    let nbVisite: number = 0;
    let nbPanier: number = 0;
    this.multi.forEach(element => {
      if (element.name == "Nb Panier") {
        element.series.forEach((element3: any) => {
          nbPanier += element3.value;
        });
      } else {
        element.series.forEach((element2: any) => {
          nbVisite += element2.value;
        })
      }
    })
    this.abdnMoy = Math.round((nbPanier / nbVisite) * 100);
  }

}
