import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn } from 'src/app/models/sign-in';
import { SignInService } from 'src/app/services/sign-in.service';

/** @title Form field with error messages */
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  apiError ?: string;
  isVerification = false;
  mailVerification = new SignIn();
  hide = true;

  constructor( private SignInService : SignInService, private router : Router) { }



  signIn() {
    this.isVerification = true;
    this.SignInService.signIn(this.mailVerification).subscribe(data => {
      localStorage.setItem('access_token', data.token);
      this.router.navigate(['/graphique']);
    }, (error :any) => {
      if (error.status === 401) {
        this.apiError = 'Identifiants incorrects';
      }
      this.isVerification = false
    });
  }
}