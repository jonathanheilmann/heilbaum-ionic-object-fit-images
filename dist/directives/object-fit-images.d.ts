import { ElementRef, Renderer, AfterViewInit } from '@angular/core';
export declare class ObjectFitImagesDirective implements AfterViewInit {
    private el;
    private renderer;
    objectFit: string;
    objectFitWatchMQ: any;
    objectPosition: string;
    constructor(el: ElementRef, renderer: Renderer);
    ngAfterViewInit(): void;
}
