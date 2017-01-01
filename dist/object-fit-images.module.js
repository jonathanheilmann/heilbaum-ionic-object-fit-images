import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ObjectFitImagesDirective } from './directives/object-fit-images';
export var ObjectFitImagesModule = (function () {
    function ObjectFitImagesModule() {
    }
    ObjectFitImagesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ObjectFitImagesDirective
                    ],
                    exports: [
                        ObjectFitImagesDirective
                    ],
                    imports: [IonicModule]
                },] },
    ];
    /** @nocollapse */
    ObjectFitImagesModule.ctorParameters = [];
    return ObjectFitImagesModule;
}());
//# sourceMappingURL=object-fit-images.module.js.map