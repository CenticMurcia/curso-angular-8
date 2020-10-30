import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InformationRegionsList } from '../interfaces/region';

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

  /**
   * Ejemplo petición post para un login
   */
  public loginAPI(): Observable<any> {
    const _headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    /** Este ejemplo indica otra manera de añadirle parámetros a nuestro Headers además del momento de crearlo */
    // _headers.append('Authorization', "Bearer " + token);

    const body = {
      username: 'user',
      password: 'pwd'
    };

    return this.httpClient.post<any>('url del servidor API', body, { headers: _headers });
  }
}
