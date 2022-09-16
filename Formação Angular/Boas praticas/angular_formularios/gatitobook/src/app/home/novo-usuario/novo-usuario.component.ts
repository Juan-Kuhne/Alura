import { NovousuarioService } from './novousuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Novousuario } from './novousuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  str = String;

  constructor(
    private formBuilder: FormBuilder,
    private novousuarioService: NovousuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [''],
      password: [''],
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as Novousuario;
    console.log(novoUsuario);
  }
  estado() {
    console.log('get email: ');
    console.log(this.novoUsuarioForm.get('email'));
    console.log('errors');
    console.log(this.novoUsuarioForm.get('email')?.errors);
  }
}
