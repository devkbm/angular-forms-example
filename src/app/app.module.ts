import { CalendarModule } from './shared/calendar/calendar.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import ko from '@angular/common/locales/ko';
registerLocaleData(ko);
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ko_KR } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CalendarModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ko_KR },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
