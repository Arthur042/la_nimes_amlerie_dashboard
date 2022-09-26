import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Recurrance } from '../models/graph1';
import {MoyBag} from "../models/moyBag";
import {TotalBag} from "../models/totalBag";
import {TotalOrdered} from "../models/totalOrdered";
import {TotalSell} from "../models/totalSell";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getStats() :Observable<{ moyBag: MoyBag; totalBag: TotalBag; totalOrdered: TotalOrdered; totalSell: TotalSell; }> {
    return forkJoin({
      moyBag : this.http.get<MoyBag>(this.apiUrl + 'stats/moy_bag'),
      totalBag : this.http.get<TotalBag>(this.apiUrl + 'stats/total_bag'),
      totalOrdered : this.http.get<TotalOrdered>(this.apiUrl + 'stats/total_ordered'),
      totalSell : this.http.get<TotalSell>(this.apiUrl + 'stats/total_sell'),
    });
  }

  getRecurance() :Observable<Recurrance[]> {
    return this.http.get<Recurrance[]>(this.apiUrl + 'stats/recurrance_ordered');
  }

  getAbandonned() :Observable<Recurrance[]> {
    return this.http.get<Recurrance[]>(this.apiUrl + 'stats/bag_abandoned');
  }

  getConvert() :Observable<Recurrance[]> {
    return this.http.get<Recurrance[]>(this.apiUrl + 'stats/conversion_ordered');
  }

  getArticle() :Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + 'stats/products_sell_list');
  }

  getVisitorPart() :Observable<any> {
    return this.http.get<any>(this.apiUrl + 'stats/number_visitors');
  }
}
