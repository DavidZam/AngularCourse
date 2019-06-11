import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') newColor: string;

  constructor(private elemRef: ElementRef) {
    // console.log('Directiva llamada');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.resaltar(this.newColor || 'green');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.elemRef.nativeElement.style.backgroundColor = color;
  }

}
