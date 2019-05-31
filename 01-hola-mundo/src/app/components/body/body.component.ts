import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'Francisco está loco de atar',
        autor: 'David Zamora'
    };

    sintomas: string[] = ['Locura', 'Miedo', 'Dolor'];

}
