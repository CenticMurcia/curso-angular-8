import { Categoria } from './../../interfaces/categorias';
import { ShareDataService } from '../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public categoria: Categoria;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.loadCategoria();
  }

  private loadCategoria(): void {
    this.shareDataService.categoria$.subscribe(
      (response: Categoria) => {
        this.categoria = response;
      }
    );
  }

}
