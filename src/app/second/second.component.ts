import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  // Atributos del Componente
  public arrayNames: Array<string>;
  public showMessage: boolean;

  constructor() {
    this.arrayNames = ['Marcos', 'Pedro', 'Carmen', 'Jonatan', 'Franciso'];
    this.showMessage = false;
  }

  ngOnInit() {
  }

  public toggleMessage(): void {

    if (this.showMessage) {
      this.showMessage = false;
    } else {
      this.showMessage = true;
    }

    // this.showMessage ? this.showMessage = false : this.showMessage = true;
  }

}
