/**
 * Componente principal, la idea de este componente es servir de base para colocar en el HTML la etiqueta de los
 * demás componentes o la etiqueta del router-outlet para el enrutamiento
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Nuestro primer componente, el componente raíz:
 * selector -> Nombre que tiene este componente. Se utiliza para poder mostrarlo como etiqueta de un HTML <app-root>
 *              como se puede ver en src/index.html
 *
 * templateUrl -> ruta del HTML que se enlazará con este componente.
 *
 * styleUrls -> Array de rutas de los archivos CSS que se enlazarán para dar estilo al HTML de este componente.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoAngular8';

  /** No es normal tener que colocar el constructor en el app.component, pues no es necesario tener que importar ningún
   * modulo aquí ya que este componente tiene como misión principal usar la etiqueta router-outlet en el html pero a veces colocamos algún
   * menú de navegación y si que necesitamos introducir datos
   */
  constructor(private router: Router) { }

  /**
   * Función para llamar al objeto Router de Angular y realizar una navegación entre componentes.
   * Cuando se trata tan solo de hacer esta lógica es más sencillo utilizar tan solamente la propiedad
   * 'routerLink' en la etiqueta del html. Usaremos la lógica del evento (click) y llamar a una
   * función cuando necesitemos introducir alguna lógica extra, como comprobar una variable o un objeto antes de ir a una url u otra
   */
  public goToSecond(): void {
    this.router.navigate(['/second']);
  }

  public goToFourth(): void {
    const num: number = Math.floor(Math.random() * (10 - 0 + 1));

    this.router.navigate([`/fourth/${ num }`]);
  }
}
