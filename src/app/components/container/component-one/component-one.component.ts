import { Component } from '@angular/core';

import { ShareDataService } from '../../../services/share-data.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent {

  public marcador: number;

  constructor(private shareDataService: ShareDataService) {
    this.marcador = 0;
  }

  public sumar(): void {
    this.marcador++;
  }

  public restar(): void {
    this.marcador--;
  }

  /**
   * Importamos el Service y llamamos al método para enviarle el nuevo valor del atributo
   */
  public actualizar(): void{
    this.shareDataService.changeMarcador(this.marcador);
  }

}
