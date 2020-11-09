import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Categoria } from './../interfaces/categorias';

@Injectable()
export class ShareDataService {

  private categoria: BehaviorSubject<Categoria> = new BehaviorSubject({name: '', palabras: []});

  public categoria$: Observable<Categoria> = this.categoria.asObservable();

  public changeCategoria(categoria: Categoria): void {
    this.categoria.next(categoria);
  }
}
