import {
  Component,
  OnInit
} from '@angular/core';
import {StatsService} from "../../services/stats.service";

@Component({
  selector: 'app-graph-conversion-panier',
  templateUrl: './graph-conversion-panier.component.html',
  styleUrls: ['./graph-conversion-panier.component.css']
})
export class GraphConversionPanierComponent implements OnInit {
  multi: any[] = [];
  abdnMoy: number = 0;
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = false;
  timeline: boolean = true;

  constructor(private statsService: StatsService) {}
  ngOnInit(): void {

    let nbVisite: number = 0;
    let nbPanier: number = 0;
    this.statsService.getVisitorPart().subscribe(data => {
        this.multi = data;
        this.multi.forEach(element => {
          console.log(element)
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
        console.log(nbPanier);
        console.log(nbVisite);
        this.abdnMoy = Math.round((nbPanier / nbVisite) * 100);
      }
    )
  }

}
