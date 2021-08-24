/*
Ser autenticável significa ter o método 'senha'
*/

export class SistemaAtuenticacao {

    static login(autenticavel, senha) {
        if(SistemaAtuenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }

        return false
    }

    static ehAutenticavel(autenticavel) {
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function
    }
}