import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-app',
  templateUrl: './sub-app.component.html',
  styleUrls: ['./sub-app.component.css']
})
export class SubAppComponent implements OnInit {

  private username: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToComponentOne(): void {
    this.router.navigate([`/exercises/component-one/${ this.username }`]);
  }

}
