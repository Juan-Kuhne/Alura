import { Novousuario } from './novousuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovousuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: Novousuario) {
    return this.http.post('http://localhost:3000/user/signup', novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
