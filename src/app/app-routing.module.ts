import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactosComponent} from './components/compartido/contactos/contactos.component';
import {ProductosComponent} from './components/compartido/productos/productos.component';

const routes: Routes = [
  {path: 'contactos', component: ContactosComponent},
  {path: 'productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [ContactosComponent, ProductosComponent]
