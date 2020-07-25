import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/compartido/menu/menu.component';
//mport { ContactosComponent } from './components/compartido/contactos/contactos.component';
//import { ProductosComponent } from './components/compartido/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //ContactosComponent,
    //ProductosComponent, 
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
