
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/models/article';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-table-article',
  templateUrl: './table-article.component.html',
  styleUrls: ['./table-article.component.css']
})
export class TableArticleComponent implements OnInit {

  data: Article[] = [];
  loading = true;
  displayedColumns: string[] = ['designation','lignesCommandes', 'totalSell'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);


  ngOnInit(): void {
    this.stats.getArticle().subscribe((data : any) => {
      let datatemp = data;

      datatemp.forEach((element : any) => {
        let article = new Article();
         article.title = element.title;
         article.nb_sell = element.nb_sell;
         article.total_sell = element.total_price;
         this.data.push(article);
    })
      console.log(this.data)
    if(this.dataSource){
    this.dataSource.data = this.data;
    this.loading = false;
    }
    })
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private stats : StatsService) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}
}
