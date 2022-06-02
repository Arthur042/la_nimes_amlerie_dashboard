import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from "@auth0/angular-jwt";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { GraphComponent } from './components/graph/graph.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IntertceptorInterceptor } from './interceptor/intertceptor.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Graph1Component } from './components/graph1/graph1.component';
import { GraphVisiteComponent } from './components/graph-visite/graph-visite.component';
import { TableArticleComponent } from './components/table-article/table-article.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GraphAbandonComponent } from './components/graph-abandon/graph-abandon.component';
import { GraphConversionCommandeComponent } from './components/graph-conversion-commande/graph-conversion-commande.component';
import { GraphConversionPanierComponent } from './components/graph-conversion-panier/graph-conversion-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GraphComponent,
    Graph1Component,
    GraphVisiteComponent,
    TableArticleComponent,
    GraphAbandonComponent,
    GraphConversionCommandeComponent,
    GraphConversionPanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    }),
    HttpClientModule,
    NgxChartsModule,
    JwtModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntertceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
