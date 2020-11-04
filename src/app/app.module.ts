/** Modulo principal
 *    Aquí cargaremos las librerias/modulos de Angular que necesitemos para trabajar en el proyecto.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Módulos que nosotros creemos como por ejemplo el módulo de rutas u otros submodulos */
import { AppRoutingModule } from './app-routing.module';

/** Cargaremos  todos los componentes, servicios y otros archivos que necesitemos de nuestro proyecto */
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponent } from './components/second/second.component';
import { ThreeComponent } from './components/three/three.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { ExampleOneFatherComponent } from './components/example-one-father/example-one-father.component';
import { ExampleOneChildComponent } from './components/example-one-father/example-one-child/example-one-child.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

import { MaterialModule } from './material.module';

@NgModule({
  /** Aqui declaramos los componentes que vayamos a utilizar */
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponent,
    ThreeComponent,
    FourthComponent,
    FourthComponent,
    ExampleOneFatherComponent,
    ExampleOneChildComponent,
    ReactiveFormComponent
  ],
  /** Importamos los modulos de Angular necesarios, incluido los submódulos que creemos nosotros */
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  /** Cargamos todos los servicios que queramos a utilizar en toda la app y que no tengan el 'provideIn: "root"' */
  providers: [],
  /** Este metadato apenas se modifica, nos indica el componente de enlace */
  bootstrap: [AppComponent]
})
export class AppModule { }
