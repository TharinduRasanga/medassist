import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedSubPageComponent} from "../med-sub-page/med-sub-page.component";
import {MedLayoutComponent} from "./med-layout.component";
import {DashboardRoutingModule} from "./med-layout-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "../app.module";
import {HttpClient} from "@angular/common/http";
import {MedMenuBarModule} from "../med-menu-bar/med-menu-bar.module";
import {DashboardModule} from "../dashboard/dashboard.module";
import {MedContactInfoComponent} from "../med-contact-info/med-contact-info.component";


@NgModule({
  declarations: [
    MedSubPageComponent,
    MedLayoutComponent,
    MedContactInfoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MedMenuBarModule,
    DashboardModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class MedLayoutModule {
}
