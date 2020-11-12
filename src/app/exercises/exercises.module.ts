import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubAppComponent } from './sub-app.component';

import { CategoriasService } from './relacion-componentes/services/categorias.service';
import { ShareDataService } from './relacion-componentes/services/share-data.service';
import { AuthGuardGuard } from './angular-avanzado/auth-guard.guard';
@NgModule({
  declarations: [
    SubAppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      // tslint:disable-next-line: max-line-length
      { path: 'dashboard', loadChildren: () => import('./angular-avanzado/dashboard/dashboard.module').then((m) => m.DashboardModule), canActivate: [AuthGuardGuard] },
      { path: 'login', loadChildren: () => import('./angular-avanzado/login/login.module').then((m) => m.LoginModule) },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ])
  ],
  providers: [CategoriasService, ShareDataService, AuthGuardGuard]
})
export class ExercisesModule { }
