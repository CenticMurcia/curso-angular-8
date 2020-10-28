import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  public username: string;
  public showComponent: boolean;

  constructor() {
    this.showComponent = false;
  }

  ngOnInit() {
  }

  public saludar(): void {
    alert(`Hola ${ this.username }, ¡Bienvenido!`);
  }

  public toggleComponent(): void {
    if (this.showComponent) {
      this.showComponent = false;
    } else {
      this.showComponent = true;
    }
  }

}
