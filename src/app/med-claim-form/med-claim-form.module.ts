import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedClaimFormRoutingModule } from './med-claim-form-routing.module';
import {MedClaimFormComponent} from './med-claim-form.component';


@NgModule({
  declarations: [MedClaimFormComponent],
  imports: [
    CommonModule,
    MedClaimFormRoutingModule
  ]
})
export class MedClaimFormModule { }
