/*
Ser autenticável significa ter o método 'senha'
*/

export class SistemaAtuenticacao {

    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha)
    }
}