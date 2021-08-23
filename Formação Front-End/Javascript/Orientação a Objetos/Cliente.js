export class Cliente { //criação do molde do cliente
    nome

    _cpf

//==================================================================

    constructor(nome, cpf) {
        this.nome = nome
        this._cpf = cpf
    }

//==================================================================

    get cpf() {
        return this._cpf
    }
}