import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaludarComponent } from './arquitectura-angular/components/saludar/saludar.component';
import { InfoGithubComponent } from './arquitectura-angular/components/info-github/info-github.component';
import { SubAppComponent } from './sub-app.component';
import { ComponentOneComponent } from './navegacion-rutas/components/component-one/component-one.component';
import { ComponentTwoComponent } from './navegacion-rutas/components/component-two/component-two.component';
import { CategoriasComponent } from './relacion-componentes/components/categorias/categorias.component';
import { PalabraComponent } from './relacion-componentes/components/categorias/palabra/palabra.component';

import { CategoriasService } from './relacion-componentes/services/categorias.service';
import { ShareDataService } from './relacion-componentes/services/share-data.service';
import { CategoriaComponent } from './relacion-componentes/components/categoria/categoria.component';

@NgModule({
  declarations: [
    SaludarComponent,
    InfoGithubComponent,
    SubAppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    CategoriasComponent,
    PalabraComponent,
    CategoriaComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: SubAppComponent , children: [
        { path: 'arquitectura', component: SaludarComponent},
        { path: 'component-one/:name', component: ComponentOneComponent},
        { path: 'component-two', component: ComponentTwoComponent},
        { path: 'categorias', component: CategoriasComponent},
        { path: 'categoria', component: CategoriaComponent},

        { path: '', redirectTo: '/exercises/arquitectura', pathMatch: 'full' }
      ]},
    ])
  ],
  providers: [CategoriasService, ShareDataService]
})
export class ExercisesModule { }
