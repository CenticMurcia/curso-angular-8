import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public pwd: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public login(): void {
    if (this.username.trim().length > 0 && this.pwd.trim().length > 0) {
      alert('Login realizado correctamente');

      /** En esa posible respuesta del servidor al realizar el login podriamos guardar el token en un localStorage o sessionStorage */
      sessionStorage.setItem('exampleToken', uuidv4());

      this.router.navigate(['/dashboard']);
    }
  }

}
