import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // deprecated
  // login() {
  //   this.authService.autenticar(this.usuario, this.senha).subscribe(
  //     () => {
  //       console.log('Autenticado com sucesso');
  //     },
  //     (error) => {
  //       alert('usuario ou senha inválidos ...');
  //       console.error(error);
  //     }
  //   );
  // }
  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: () => this.router.navigate(['animais']),
      error: (e) => {
        alert('usuario ou senha inválidos ...');
        console.error(e);
      },
      // complete: () => console.info('complete'),
    });
  }
}
