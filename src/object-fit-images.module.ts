import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ObjectFitImagesDirective } from './directives/object-fit-images';

@NgModule({
  declarations: [
    ObjectFitImagesDirective
  ],
  exports: [
    ObjectFitImagesDirective
  ],
  imports: [ IonicModule ]
})
export class ObjectFitImagesModule {}
