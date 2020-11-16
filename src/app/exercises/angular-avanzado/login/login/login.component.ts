import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public reactiveForm = this.fb.group({
    username: ['', [Validators.required]],
    pwd: ['', [Validators.required, Validators.minLength(4)]]
  });
  public hide: boolean;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.hide = true;
  }

  public login(): void {
    if (this.reactiveForm.get('username').value.trim().length > 0
      && this.reactiveForm.get('pwd').value.trim().length > 0) {

        alert('Login realizado correctamente');

        sessionStorage.setItem('appToken', uuidv4());

        this.router.navigate(['/exercises/dashboard']);
    }
  }

}
