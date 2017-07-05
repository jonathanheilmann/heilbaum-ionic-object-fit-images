import { Directive, ElementRef, Renderer2, Input, AfterViewInit } from '@angular/core';
import objectFitImages from 'object-fit-images';

@Directive({
  selector: '[object-fit]'
})
export class ObjectFitImagesDirective implements AfterViewInit {

  @Input('object-fit') objectFit: string;
  @Input('object-fit-watch-mq') objectFitWatchMQ;
  @Input('object-position') objectPosition: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit() {
    let objectFit = this.objectFit || 'fill';
    let objectPosition = this.objectPosition;
    let settings = { watchMQ: !!this.objectFitWatchMQ };

    // Apply object-fit property and value
    this.renderer.setStyle(this.el.nativeElement, 'object-fit', objectFit);
    let fontFamily = 'object-fit: ' + objectFit + ';';

    if (objectPosition) {
      // Apply object-position property and value
      this.renderer.setStyle(this.el.nativeElement, 'object-position', objectPosition);
      fontFamily += ' object-position: ' + objectPosition + ';'
    }

    // Apply font-family property and value
    // Requires to fetch actual font-family to apply the new one to element
    const computedStyles = window.getComputedStyle(this.el.nativeElement);
    const computedFontFamily = computedStyles.hasOwnProperty('font-family') ? computedStyles['font-family'] : '';

    this.renderer.setStyle(
      this.el.nativeElement,
      'font-family',
      '"' + fontFamily + '"' + (computedFontFamily ? ', ' + computedFontFamily : '')
    );

    // Apply polyfill to element
    objectFitImages(this.el.nativeElement, settings);
  }

}
