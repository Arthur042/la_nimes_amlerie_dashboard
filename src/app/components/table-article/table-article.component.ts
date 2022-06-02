
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
      let datatemp = data['hydra:member'];

      datatemp.forEach((element : any) => {  
        let article = new Article();
         article.id = element.id;
         article.designation = element.designation;
         article.prix = element.prix;
         article.lignesCommandes = element.lignesCommandes.length;
         this.data.push(article);
    })
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