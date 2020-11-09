import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataJSON } from '../interfaces/categorias';

@Injectable()
export class CategoriasService {

  constructor(private httpClient: HttpClient) { }

  public getCategorias(): Observable<DataJSON> {

    return this.httpClient.get<DataJSON>('assets/data.json');
  }
}
