import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apiKey = 'AIzaSyBj5IBUAEDfoYQYIqVNKKPXk1EMISTDe_Y';

  userToken: string;

  // Crear nuevo usuario
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  // Login
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor(private httpServ: HttpClient) {
    this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      // tiene las mismas propiedades que tiene el modelo UsuarioModel:
      ...usuario,
      returnSecureToken: true
    };

    return this.httpServ.post(
      `${this.url}/verifyPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map( (res: any) => {
        this.saveToken(res.idToken);
        // devolvemos la respuesta para que el operador map() no la bloquee
        return res;
      }),
      // catchError( err =>
      //   of(`Error: (${err})`)
      // ),
    );
  }

  newUser(usuario: UsuarioModel) {
    const authData = {
        // tiene las mismas propiedades que tiene el modelo UsuarioModel:
        ...usuario,
        returnSecureToken: true
    };

    return this.httpServ.post(
      `${this.url}/signupNewUser?key=${this.apiKey}`,
      authData
    ).pipe(
      map( (res: any) => {
        this.saveToken(res.idToken);
        // devolvemos la respuesta para que el operador map() no la bloquee
        return res;
      }),
      // catchError( err =>
      //   of(`Error: (${err})`)
      // ),
    );
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', this.userToken);

    const now = new Date();
    now.setSeconds( 3600 );

    localStorage.setItem('expires', now.getTime().toString());
  }

  getToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isLogged(): boolean {
    let logged = false;

    if (this.userToken.length < 2) {
      logged = false;
    }

    const expires = Number(localStorage.getItem('expires'));
    const expireDate = new Date();
    expireDate.setTime(expires);

    if (expireDate > new Date()) {
      logged = true;
    } else {
      logged = false;
    }

    return logged;
  }

}
