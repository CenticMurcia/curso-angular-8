import { Component, OnInit } from '@angular/core';

import { FirstServiceService } from '../../services/first-service.service';
import { Region, InformationRegionsList } from '../../interfaces/region';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  public regionsArray: Array<Region>;
  public date: Date;

  /**
   * Todo lo que pase por el inyector de dependencias deberá inicializarse en el constructor
   */
  constructor(private firstService: FirstServiceService) {
    this.regionsArray = [];
    this.date = new Date();
  }

  ngOnInit() {
    this.firstService.getMessage();

    this.loadDataAPI();

  }

  /**
   * Petición estandar a un servicio con una respuesta con Observable
   */
  private loadDataAPI(): void {
    this.firstService.getInfoAPI().subscribe(
      (response: Region[]) => {

        this.regionsArray = response;

      },
      (error) => {
        console.error('Error en la petición: ', error);
      }
    );
  }

}
