import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState;

  constructor(private afauth:AngularFireAuth, private route:Router) { }
  login(usercreds) {
    this.afauth.auth.signInWithEmailAndPassword(usercreds.email, usercreds.password).then(user => {
        this.authState = user;
        this.route.navigate(['dashboard']);
    });
  }
  authUser(): boolean {
    return this.authState !=null && this.authState !==  undefined ? true : false;
  }
}
