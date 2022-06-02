import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { Graph1 } from '../models/graph1';
import { Stats } from '../models/stats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }
  
  getStats() :Observable<Stats> {
    return this.http.get<Stats>(this.apiUrl + 'stats');
  }

  getGraph1() :Observable<Graph1[]> {
    return this.http.get<Graph1[]>(this.apiUrl + 'graph-1');
  }

  getArticle() :Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + 'api/produits');
  }
}
