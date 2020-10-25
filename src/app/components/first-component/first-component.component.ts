import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  /**
   * Atributos del componente
   */

  public variable1: string;
  public imageSrc: string;

  constructor() { }

  /**
   * Método que se lanza cuando se crea una instancia del componente.
   */
  ngOnInit() {
    this.variable1 = "Curso de framework web";
    this.imageSrc = "https://gaming.centic.ovh/files/matchs/image_square_p2iionP.png";
  }

  /**
   * Métodos del componente
   */

  public devuelveCurso(): string {
    return "Curso de Angular 8";
  }

  public saludar(): void {
    alert("Saludando!!");
  }

}
