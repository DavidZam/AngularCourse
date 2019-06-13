import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioModel;

  constructor() { }

  ngOnInit() {
    this.usuarioLogin = new UsuarioModel();
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    console.log('Formulario enviado');
    console.log(this.usuarioLogin);
    console.log(loginForm);
  }

}
