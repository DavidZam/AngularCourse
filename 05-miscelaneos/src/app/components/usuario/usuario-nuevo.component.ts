import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.parent.params.subscribe( param => {
      console.log('Ruta HIJA Nuevo');
      console.log(param);
    });
  }

  ngOnInit() {
  }

}
