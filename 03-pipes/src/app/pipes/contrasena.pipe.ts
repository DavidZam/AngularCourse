import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, mostrar: boolean = true): any {

    if (mostrar) {
      value = value.split('');

      // tslint:disable-next-line:forin
      for (let i = 0; i < value.length; i++) {
        value[i] = '*';
      }
    }

    return value.join('');
  }

}
