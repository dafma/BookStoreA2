import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow')
   }

}
