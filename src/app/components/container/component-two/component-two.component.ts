import { Component, OnInit } from '@angular/core';

import { ShareDataService } from '../../../services/share-data.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  public marcador: number;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {

    this.loadMarcador();
  }

  /**
   * Cargamos nuestro Service y nos 'subscribimos' a ese atributo intermedio para recoger el valor.
   */
  private loadMarcador(): void {
    this.shareDataService.marcador$.subscribe(
      (response) => {
        this.marcador = response;
      }
    );
  }

}
