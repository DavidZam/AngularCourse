import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private authServ: AuthService) {
    authServ.handleAuthentication();
  }

  login() {
    this.authServ.login();
  }

  salir() {
    this.authServ.logout();
  }

}
