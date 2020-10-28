import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-one-child',
  templateUrl: './example-one-child.component.html',
  styleUrls: ['./example-one-child.component.css']
})
export class ExampleOneChildComponent implements OnInit {
  /** Colocando la etiqueta @Input() delante de un atributo de la clase ExampleOneChild indicará a Angular que podemos utilizarla en
   * su etiqueta como se muestra en example-one-father.component.html
   */
  @Input() public username: string;
  // En esta segunda manera de utilizar Input() Angular buscará el atributo 'lastName' en vez de 'secondName'
  @Input('lastName') public secondName: string;

  constructor() { }

  ngOnInit() {
  }

}
