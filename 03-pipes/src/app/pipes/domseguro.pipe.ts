import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(codigoVideo: string, url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + codigoVideo );
  }

}
