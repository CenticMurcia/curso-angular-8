import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  declarations: [DashboardComponent, ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      /**
       * Rutas anidadas. El componente 'dashboard' deberá de tener la etiqueta <router-outlet> en su html para que Angular muestre esas dos
       * sub vistas 'uno' y 'dos'. Para identificar las sub rutas será a través de la etiqueta 'children' en la ruta principal y las 
       * sub rutas serán como las rutas habituales
       */
      { path: 'dashboard' , component: DashboardComponent, children: [
        { path: 'one', component: ComponentOneComponent},
        { path: 'two', component: ComponentTwoComponent}
      ]},

      { path: '', redirectTo: '/dashboard/dashboard/one', pathMatch: 'full'}
    ])
  ]
})
export class DashboardModule { }
