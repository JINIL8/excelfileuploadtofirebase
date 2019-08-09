import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private route:Router, private authService: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.authService.authUser()){
        return true;
      }
      else {
        console.log('you must be logged in ');
        this.route.navigate(['login']);
        return false;
      }
    }
  }

