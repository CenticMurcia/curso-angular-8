import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public reactiveForm = this.fb.group({
    nombre: ['', [Validators.required]],
    categoria: ['', [Validators.required, Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public create(): void {
    alert(`Palabra ${ this.reactiveForm.get('nombre').value } creada correctamente`);
  }

}
