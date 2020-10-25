/** Modulo principal
 *    Aquí cargaremos las librerias/modulos de Angular que necesitemos para trabajar en el proyecto.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

/** Cargaremos  todos los componentes, servicios y otros archivos que necesitemos de nuestro proyecto */
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponent } from './components/second/second.component';
import { ThreeComponent } from './components/three/three.component';
import { FourthComponent } from './components/fourth/fourth.component';

@NgModule({
  /** Aqui declaramos los componentes que vayamos a utilizar */
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent,
    ThreeComponent,
    FourthComponent
  ],
  /** Importamos los modulos de Angular necesarios */
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  /** Cargamos todos los servicios que queramos a utilizar en toda la app y que no tengan el 'provideIn: "root"' */
  providers: [],
  /** Este metadato apenas se modifica, nos indica el componente de enlace */
  bootstrap: [AppComponent]
})
export class AppModule { }
