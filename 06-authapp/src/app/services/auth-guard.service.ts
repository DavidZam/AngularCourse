import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,
          RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authServ: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let can = false;

    console.log(next);

    if (this.authServ.isAuthenticated()) {
      console.log('Paso el guard');
      can = true;
    } else {
      console.error('Bloqueado por el guard');
      can = false;
    }
    return can;
  }

}
