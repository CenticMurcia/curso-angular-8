import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardGuard } from '../../auth-guard.guard';

@NgModule({
  declarations: [DashboardComponent, ComponentOneComponent, ComponentTwoComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      /**
       * Rutas anidadas. El componente 'dashboard' deberá de tener la etiqueta <router-outlet> en su html para que Angular muestre esas dos
       * sub vistas 'uno' y 'dos'. Para identificar las sub rutas será a través de la etiqueta 'children' en la ruta principal y las
       * sub rutas serán como las rutas habituales
       */
      { path: 'dashboard' , component: DashboardComponent, children: [
        { path: 'one', component: ComponentOneComponent},
        { path: 'two', component: ComponentTwoComponent}
      /**
       * Para 'proteger' nuestras rutas y que solo los usuarios con permisos puedan acceder a ellas se utiliza la etiqueta
       * 'canActivate'. El service que le importemos deberá tener implementado el 'CanActivate'
       */
      ], canActivate: [AuthGuardGuard] },
      { path: 'login', component: LoginComponent},

      { path: '', redirectTo: 'dashboard/one', pathMatch: 'full'}
    ])
  ]
})
export class DashboardModule { }
