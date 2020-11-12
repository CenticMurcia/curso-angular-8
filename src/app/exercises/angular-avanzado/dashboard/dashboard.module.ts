import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SaludarComponent } from '../../arquitectura-angular/components/saludar/saludar.component';
import { InfoGithubComponent } from '../../arquitectura-angular/components/info-github/info-github.component';
import { ComponentOneComponent } from '../../navegacion-rutas/components/component-one/component-one.component';
import { ComponentTwoComponent } from '../../navegacion-rutas/components/component-two/component-two.component';
import { CategoriasComponent } from '../../relacion-componentes/components/categorias/categorias.component';
import { PalabraComponent } from '../../relacion-componentes/components/categorias/palabra/palabra.component';
import { CategoriaComponent } from '../../relacion-componentes/components/categoria/categoria.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [SaludarComponent, InfoGithubComponent, ComponentOneComponent, ComponentTwoComponent, CategoriasComponent, PalabraComponent, CategoriaComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent , children: [
        { path: 'arquitectura', component: SaludarComponent},
        { path: 'component-one/:name', component: ComponentOneComponent},
        { path: 'component-two', component: ComponentTwoComponent},
        { path: 'categorias', component: CategoriasComponent},
        { path: 'categoria', component: CategoriaComponent},

        { path: '', redirectTo: 'arquitectura', pathMatch: 'full' }
      ]},
    ]),
    FormsModule
  ]
})
export class DashboardModule { }
