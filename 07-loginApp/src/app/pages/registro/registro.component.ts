import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  rememberMe = false;

  constructor(private authServ: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
   }

  onSubmit( registroForm: NgForm) {

    if (registroForm.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espera por favor'
    });
    Swal.showLoading();

    this.authServ.newUser(this.usuario)
      .subscribe( res => {
        Swal.close();
        if (this.rememberMe) {
          localStorage.setItem('email', this.usuario.email);
        }
        this.router.navigateByUrl('/home');
      }, (err) => {
        console.error(err.error.error.message);
        Swal.fire({
          type: 'error',
          title: 'Error al registrar nuevo usuario',
          text: err.error.error.message
        });
      });
  }

}
