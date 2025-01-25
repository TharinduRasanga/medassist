import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedMenuBarComponent} from "./med-menu-bar.component";
import {UiSwitchModule} from "ngx-toggle-switch";
import {TranslateModule} from "@ngx-translate/core";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [MedMenuBarComponent],
  imports: [
    CommonModule,
    UiSwitchModule,
    TranslateModule,
    NgSelectModule
  ],
  exports: [MedMenuBarComponent]
})
export class MedMenuBarModule {
}
