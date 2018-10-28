import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MenuModule } from './menu/menu.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
