import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgwWowModule} from 'ngx-wow';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../app.module';
import {MedMenuBarComponent} from '../med-menu-bar/med-menu-bar.component';
import {MedOurServicesSmComponent} from '../med-our-services-sm/med-our-services-sm.component';
import {MedContactInfoComponent} from '../med-contact-info/med-contact-info.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {LoginFormAdditionalComponent} from '../login/login-form-additional/login-form-additional.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MedMenuBarComponent,
    MedOurServicesSmComponent,
    LoginFormAdditionalComponent,
    MedContactInfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgwWowModule,
    CarouselModule,
    HttpClientModule,
    DashboardRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class DashboardModule {
}
