import { Component, OnInit, HostListener } from '@angular/core';
import { SignInService } from 'src/app/services/sign-in.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  stats : any = {};
  moyPanier ?: number;
  constructor(private signInservice : SignInService, private statsService: StatsService) { }

  ngOnInit(): void {
    this.statsService.getStats().subscribe(data => {
        this.stats = data;
      }
    )
  }

  logOut() :void {
    this.signInservice.doLogout();
  }

//   @HostListener('window:beforeunload', ['$event'])
// beforeunloadHandler() {
//   localStorage.removeItem('access_token');
// }
}
