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

@NgModule({
  declarations: [SaludarComponent, InfoGithubComponent, SubAppComponent, ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: SubAppComponent , children: [
        { path: 'arquitectura', component: SaludarComponent},
        { path: 'component-one/:name', component: ComponentOneComponent},
        { path: 'component-two', component: ComponentTwoComponent},

        { path: '', redirectTo: '/exercises/arquitectura', pathMatch: 'full' }
      ]},
    ])
  ]
})
export class ExercisesModule { }
