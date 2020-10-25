/** Modulo principal
 *    Aquí cargaremos las librerias/modulos de Angular que necesitemos para trabajar en el proyecto.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Cargaremos  todos los componentes, servicios y otros archivos que necesitemos de nuestro proyecto */
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { ThreeComponent } from './three/three.component';

@NgModule({
  /** Aqui declaramos los componentes que vayamos a utilizar */
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent,
    ThreeComponent
  ],
  /** Importamos los modulos de Angular necesarios */
  imports: [
    BrowserModule,
    FormsModule
  ],
  /** Cargamos todos los servicios que queramos a utilizar en toda la app y que no tengan el 'provideIn: "root"' */
  providers: [],
  /** Este metadato apenas se modifica, nos indica el componente de enlace */
  bootstrap: [AppComponent]
})
export class AppModule { }
