import { Directive, ElementRef, Renderer, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[object-fit]'
})
export class ObjectFitImagesDirective implements AfterViewInit {

  @Input('object-fit') objectFit: string;
  @Input('object-fit-watch-mq') objectFitWatchMQ;
  @Input('object-position') objectPosition: string;

  constructor(
      private el: ElementRef,
      private renderer: Renderer
  ) {
  }

  ngAfterViewInit() {
    console.log(this.objectFit);
    let objectFit = this.objectFit || 'fill';
    let objectPosition = this.objectPosition;
    let settings = { watchMQ: !!this.objectFitWatchMQ };

    // Apply object-fit property and value
    this.renderer.setElementStyle(this.el.nativeElement, 'object-fit', objectFit);
    let fontFamily = 'object-fit: ' + objectFit + ';';

    if (objectPosition) {
      // Apply object-position property and value
      this.renderer.setElementStyle(this.el.nativeElement, 'object-position', objectPosition);
      fontFamily += ' object-position: ' + objectPosition + ';'
    }

    // Apply font-family property and value
    this.renderer.setElementStyle(this.el.nativeElement, 'font-family', fontFamily);

    // Apply polyfill to element
    let objectFitImages = require('object-fit-images').default;
    objectFitImages(this.el.nativeElement, settings);
  }

}
