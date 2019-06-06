import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoImagePipe implements PipeTransform {

  transform( images: any[]): string {
      let noImageString;

      if (!images || images.length <= 0) {
        noImageString = 'assets/img/noimage.png';
      }

      if (images.length > 0) {
        noImageString = images[0].url;
      }

      return noImageString;
  }

}
