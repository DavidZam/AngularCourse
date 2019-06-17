import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../../app/models/usuariomodel';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  constructor() { }

  usuario: UsuarioModel = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [{
    codigo: 'SPA',
    nombre: 'España'
  },
  {
    codigo: 'CRI',
    nombre: 'Costa Rica'
  }];

  sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  save(form: NgForm) {
    console.log('NgForm', form);
    console.log('Valor formulario', form.value);

    console.log('Usuario', this.usuario);
  }

}
