import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServ: AuthService,
              private router: Router) { }

  canActivate(): boolean {
    let logged = false;
    if (this.authServ.isLogged()) {
      logged = true;
    } else {
      this.router.navigateByUrl('/login');
      logged = false;
    }
    return logged;
  }

}
