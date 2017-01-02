import { Directive, ElementRef, Renderer, Input } from '@angular/core';
export var ObjectFitImagesDirective = (function () {
    function ObjectFitImagesDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ObjectFitImagesDirective.prototype.ngAfterViewInit = function () {
        var objectFit = this.objectFit || 'fill';
        var objectPosition = this.objectPosition;
        var settings = { watchMQ: !!this.objectFitWatchMQ };
        // Apply object-fit property and value
        this.renderer.setElementStyle(this.el.nativeElement, 'object-fit', objectFit);
        var fontFamily = 'object-fit: ' + objectFit + ';';
        if (objectPosition) {
            // Apply object-position property and value
            this.renderer.setElementStyle(this.el.nativeElement, 'object-position', objectPosition);
            fontFamily += ' object-position: ' + objectPosition + ';';
        }
        // Apply font-family property and value
        this.renderer.setElementStyle(this.el.nativeElement, 'font-family', fontFamily);
        // Apply polyfill to element
        var objectFitImages = require('object-fit-images').default;
        objectFitImages(this.el.nativeElement, settings);
    };
    ObjectFitImagesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[object-fit]'
                },] },
    ];
    /** @nocollapse */
    ObjectFitImagesDirective.ctorParameters = [
        { type: ElementRef, },
        { type: Renderer, },
    ];
    ObjectFitImagesDirective.propDecorators = {
        'objectFit': [{ type: Input, args: ['object-fit',] },],
        'objectFitWatchMQ': [{ type: Input, args: ['object-fit-watch-mq',] },],
        'objectPosition': [{ type: Input, args: ['object-position',] },],
    };
    return ObjectFitImagesDirective;
}());
//# sourceMappingURL=object-fit-images.js.map