import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { NewSolicitudComponent } from './adoptante/solicitud/new-solicitud/new-solicitud.component';
//import {ChipsAutocompleteExample} from './admin/publications/shared/form-publication/form-publication.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


registerLocaleData(localeEs,'es');


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}, NewSolicitudComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
