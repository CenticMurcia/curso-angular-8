import { Component, OnInit } from '@angular/core';

import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private firstService: FirstServiceService) { }

  ngOnInit() {
    this.firstService.getMessage();
  }

}
