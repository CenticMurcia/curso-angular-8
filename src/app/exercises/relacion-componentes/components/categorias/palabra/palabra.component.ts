import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Palabra } from '../../../interfaces/categorias';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {

  @Input() public item: Palabra;
  @Output() public onShowPalabra: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public showPalabra(): void {
    this.onShowPalabra.emit(this.item.name);
  }

}
