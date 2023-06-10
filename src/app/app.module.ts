import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { ConvertcurrencyPipe } from './convertcurrency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertPipe,
    ConvertcurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
