import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-one-father',
  templateUrl: './example-one-father.component.html',
  styleUrls: ['./example-one-father.component.css']
})
export class ExampleOneFatherComponent implements OnInit {

  // Atributos de la clase ExampleOneFather
  public name: string;
  public lastName: string;
  public myNumber: number;

  constructor() { }

  ngOnInit() {
  }

  public showAlert(): void {
    alert(`Bienvenido ${ this.name } ${ this.lastName }!!`);
  }

  public calculate(valueCalculate: number): void {
    this.myNumber = valueCalculate;
  }

}
