import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [style.fontSize.px]="tamano">
      Hola mundo...esta es una etiqueta
    </p>

    <button class="btn btn-primary m-2" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano = 10;

  constructor() {
  }

  ngOnInit() {
  }

}
