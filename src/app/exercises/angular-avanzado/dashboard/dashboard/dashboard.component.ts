import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public username: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToComponentOne(): void {
    this.router.navigate([`/exercises/dashboard/component-one/${ this.username }`]);
  }

}
