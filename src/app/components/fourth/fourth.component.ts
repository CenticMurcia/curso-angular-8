import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  public idRandom: number;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe( params => {
      this.idRandom = +params.id;
    });
  }

  ngOnInit() {
  }

}
