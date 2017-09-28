import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { AddimovelComponent } from './addimovel/addimovel.component';
import { ApruaapiacasComponent } from './apruaapiacas/apruaapiacas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    AddimovelComponent,
    ApruaapiacasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
