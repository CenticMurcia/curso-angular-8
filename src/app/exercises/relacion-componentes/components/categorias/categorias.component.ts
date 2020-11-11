import { Component, OnInit } from '@angular/core';

import { CategoriasService } from './../../services/categorias.service';
import { Categoria, DataJSON } from '../../interfaces/categorias';
import { ShareDataService } from '../../services/share-data.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public categorias: Array<Categoria>;

  constructor(private categoriasService: CategoriasService, private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {

    this.categoriasService.getCategorias().subscribe(
      (response: DataJSON) => {
        this.categorias = [...response.data];
      },
      (error) => {
        console.error('Error getCategorias() | CategoriasComponent: ', error);
      }
    );
  }

  public showPalabra(namePalabra: string): void {
    alert(`Palabra seleccionada: ${ namePalabra }`);
  }

  public selectCategoria(categoria: Categoria): void {
    this.shareDataService.changeCategoria(categoria);
  }

}
