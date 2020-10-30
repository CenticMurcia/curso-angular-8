import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContainerComponent } from './container.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

import { ShareDataService } from '../../services/share-data.service';

@NgModule({
  declarations: [ ContainerComponent, ComponentThreeComponent, ComponentOneComponent, ComponentTwoComponent],
  imports: [
    CommonModule,
    /** Debemos crear subrutas para poder acceder a los componentes de este sub-módulo. Importante que para el app.module.ts se utiliza
     * Router.Module.forRoot() pero en los sub-módulos con rutas debemos usar el siguiente con .forChild()
     */
    RouterModule.forChild([
      { path: '', component: ContainerComponent}
    ])
  ],
  providers: [ShareDataService]
})
export class ContainerModule { }
