import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.params.subscribe( param => {
      console.log('Ruta PADRE');
      console.log(param);
    });
   }

  ngOnInit() {
  }

}
