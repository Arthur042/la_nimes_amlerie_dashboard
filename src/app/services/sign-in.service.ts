import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { SignIn } from '../models/sign-in';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  apiUrl = environment.apiUrl
  
  constructor( private router : Router, private toastr: ToastrService, private http : HttpClient) { }

  signIn(mail : SignIn) :Observable<any>{
    return this.http.post<any>(this.apiUrl + 'authentication_token', mail);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }

  get isLoggedIn() : boolean {
    
    let token = localStorage.getItem('access_token');
    if (token) {
        if(jwt_decode<any>(token).exp < moment().unix()){
          this.toastr.error('Votre session a expiré, veuillez vous reconnecter');
          localStorage.removeItem('access_token');
          this.router.navigate(['/']);
          return false
        }
      return true
    } else {
      return false
    }
  }
}
