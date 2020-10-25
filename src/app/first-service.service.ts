import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InformationRegionsList } from './interfaces/region';

/**
 * Con este metadata estamos diciendo que esta clase-servicio se cargará en el módulo raíz al crear la aplicación webs
 * por lo que no necesitamos importarla en ningún "providers"
 */
@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor(private httpClient: HttpClient) { }

  public getMessage(): void {
    alert('Mensaje dentro del Servicio');
  }

  /**
   * Petición estandar de HttpClient.
   */
  public getInfoAPI(): Observable<InformationRegionsList> {

    return this.httpClient.get<InformationRegionsList>('http://api.worldbank.org/v2/region/?format=json');
  }
}
