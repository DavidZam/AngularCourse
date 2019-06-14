import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioModel;
  rememberMe = false;

  constructor(private authServ: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuarioLogin = new UsuarioModel();

    if (localStorage.getItem('email')) {
      this.usuarioLogin.email = localStorage.getItem('email');
      this.rememberMe = true;
    }
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espera por favor'
    });
    Swal.showLoading();

    this.authServ.login(this.usuarioLogin)
      .subscribe( res => {
        Swal.close();
        if (this.rememberMe) {
          localStorage.setItem('email', this.usuarioLogin.email);
        }
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.error(err.error.error.message);
        Swal.fire({
          type: 'error',
          title: 'Error al entrar',
          text: err.error.error.message
        });
      });
  }

}
