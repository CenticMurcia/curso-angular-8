import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * Importante recordar:
 * 1 -> El atributo private myNumber es lel que almacena el valor a transferir entre componentes
 * 2 -> El atributo con el $ es el intermediario para recuperar ese valor, es como el método get de una clase en java por ejemplo
 * 3 -> Un método para cambiar el valor del atributo, como el set de java por seguir con el ejemplo.
 */
@Injectable()
export class ShareDataService {

  /**
   * En el caso de ser dos componentes totalmente separados se usara el objeto BehaviorSubject(T) donde T será un valor del tipo
   * que queramos pasar, por ejemplo
   *
   *  private marcador: BehaviorSubject<number> = new BehaviorSubject(0);
   *
   * Esto quiere decir que el tipo con el que trabajaremos será number
   */
  private marcador: Subject<number> = new Subject<number>();

  /** Observable. Variable intermedia que recupera el valor de la variable principal. Lo usaremos en el componente para 
   * recuperar el valor de la variable
   */
  public marcador$: Observable<number> = this.marcador.asObservable();

  // Función para cambiar el valor del atributo principal. Importante no olvidar el método .next() para cambiar ese valor
  public changeMarcador(marcador: number): void {
    this.marcador.next(marcador);
  }
}
