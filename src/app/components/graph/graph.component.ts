import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/stats';
import { SignInService } from 'src/app/services/sign-in.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  stats : Stats = new Stats();
  moyPanier ?: number;
  constructor(private signInservice : SignInService, private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.getStats().subscribe(data => {
      this.stats = data;
      if (this.stats.montantVenteTotal && this.stats.nbCommand) {
      this.moyPanier = Math.round(this.stats.montantVenteTotal / this.stats.nbCommand);
    }
  })
  }

  logOut() :void {
    this.signInservice.doLogout();
  }


}