import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponent } from './components/second/second.component';
import { ThreeComponent } from './components/three/three.component';
import { FourthComponent } from './components/fourth/fourth.component';

/**
 * Objeto con todas las rutas que vamos a crear para nuestra aplicación
 */
const routes: Routes = [
  { path: 'first', component: FirstComponentComponent },
  { path: 'second', component: SecondComponent},
  { path: 'third', component: ThreeComponent},
  // Ejemplo de ruta con parámetros. Para definir un parámetro tan solo debemos añadir ':' delante del nombre del parámetro
  { path: 'fourth/:id', component: FourthComponent},

  // Ruta por defecto donde redirigirá a la que hayamos colocado, importante no olvidar '/' en el nombre de la ruta y 'pathMatch: "full"'
  {path: '', redirectTo: '/first', pathMatch: 'full'},
  // Ruta de página no encontrada
  {path: '**', component: FirstComponentComponent}
];

/**
 * Metadatos para la clase de Routing, de esta manera estamos exportando la clase de RouterModule para poder usar las rutas y en el import
 * introducimos en nuestra app todas las rutas que hemos creado. Al ser un metadata de NgModule debemos tratarlo como una librería del
 * modulo y cargar esta clase en los imports del modulo principal.
 */
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}

