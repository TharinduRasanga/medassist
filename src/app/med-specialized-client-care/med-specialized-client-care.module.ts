import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedSpecializedClientCareComponent} from './med-specialized-client-care.component';
import {MedPopupModule} from "../med-popup/med-popup.module";


@NgModule({
  declarations: [MedSpecializedClientCareComponent],
  imports: [
    CommonModule,
    MedPopupModule,
  ],
  exports: [MedSpecializedClientCareComponent]
})
export class MedSpecializedClientCareModule {
}
