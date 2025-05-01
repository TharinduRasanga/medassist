import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgwWowModule} from 'ngx-wow';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../app.module';
import {MedOurServicesSmComponent} from '../med-our-services-sm/med-our-services-sm.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LoginFormAdditionalComponent} from '../login/login-form-additional/login-form-additional.component';
import {MedMenuBarModule} from "../med-menu-bar/med-menu-bar.module";
import {MedSpecializedClientCareModule} from "../med-specialized-client-care/med-specialized-client-care.module";


@NgModule({
  declarations: [
    DashboardComponent,
    MedOurServicesSmComponent,
    LoginFormAdditionalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgwWowModule,
    CarouselModule,
    MedSpecializedClientCareModule,
    HttpClientModule,
    DashboardRoutingModule,
    MedMenuBarModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
