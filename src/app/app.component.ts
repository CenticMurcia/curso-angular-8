/**
 * Componente principal, la idea de este componente es servir de base para colocar en el HTML la etiqueta de los
 * demás componentes o la etiqueta del router-outlet para el enrutamiento
 */
import { Component } from '@angular/core';

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
}
