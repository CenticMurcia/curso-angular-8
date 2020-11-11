import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  public username: string;

  constructor(private activatedRoute: ActivatedRoute, private location: Location) {
    this.activatedRoute.params.subscribe( params => {
      this.username = params.name;
    });
  }

  ngOnInit() {
  }

  public goBack() { this.location.back(); }

}
