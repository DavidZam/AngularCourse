import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'David';
  nombre2 = 'david zaMOra rEy';

  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  decimal = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Francisco',
    clave: 'Topoman',
    edad: 700,
    direccion: {
      calle: 'Rios Rosas',
      casa: 'X'
    }
  };

  valorDePromesa = new Promise( (resolve, reject ) => {
    setTimeout( () => resolve('Aquí estan los datos'), 3500 );
  });

  fecha = new Date();

  video = 'qjBRvxRi-c4';

  mostrar = true;


}
