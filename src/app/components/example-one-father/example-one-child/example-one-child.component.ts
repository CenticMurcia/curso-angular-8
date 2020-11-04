import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-one-child',
  templateUrl: './example-one-child.component.html',
  styleUrls: ['./example-one-child.component.css']
})
export class ExampleOneChildComponent implements OnInit {
  /** Colocando @Input() delante de un atributo de la clase ExampleOneChild indicará a Angular que podemos utilizarla en
   * su etiqueta como se muestra en example-one-father.component.html
   */
  @Input() public username: string;
  // En esta segunda manera de utilizar Input() Angular buscará el atributo 'lastName' en vez de 'secondName'
  @Input('lastName') public secondName: string;
  /** Con Output() estamos creando nuevos eventos para este componente y poder utilizarlo en su etiqueta de HTML */
  @Output() onShowAlert = new EventEmitter<null>();
  @Output() onCalculate = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public showAlert(): void {
    /** La forma de 'lanzar' esos eventos es a través del método .emit(), si no ese evento no se lanzará
     */
    this.onShowAlert.emit();
  }

  public calculate(): void {
    const num: number = Math.floor(Math.random() * (10 - 0 + 1));

    /** Si quisieramos mandar un valor al componente padre se hará mandandolo como parámetro del método .emit() */
    this.onCalculate.emit(num);
  }

}
