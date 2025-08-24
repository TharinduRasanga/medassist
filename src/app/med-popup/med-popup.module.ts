import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedPopupComponent} from './med-popup.component';
import {TrimPipeModule} from '../pipe/trim/trim-pipe.module';


@NgModule({
  declarations: [MedPopupComponent],
  imports: [
    CommonModule,
    TrimPipeModule
  ],
  exports: [MedPopupComponent]
})
export class MedPopupModule {
}
