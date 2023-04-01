import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MedMenuBarComponent } from './med-menu-bar/med-menu-bar.component';
import { MedOurServicesSmComponent } from './med-our-services-sm/med-our-services-sm.component';
import { MedContactInfoComponent } from './med-contact-info/med-contact-info.component';
import { NgwWowModule } from 'ngx-wow';
import {CarouselModule} from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    MedMenuBarComponent,
    MedOurServicesSmComponent,
    MedContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgwWowModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


