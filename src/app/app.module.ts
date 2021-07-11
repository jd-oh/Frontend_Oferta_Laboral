import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuLateralComponent } from './publico/paginaMaestra/menu-lateral/menu-lateral.component';
import { PieDePaginaComponent } from './publico/paginaMaestra/pie-de-pagina/pie-de-pagina.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { BarraNavegacionComponent } from './publico/paginaMaestra/barra-navegacion/barra-navegacion.component';
import { Error404Component } from './publico/errores/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    PieDePaginaComponent,
    InicioComponent,
    BarraNavegacionComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
