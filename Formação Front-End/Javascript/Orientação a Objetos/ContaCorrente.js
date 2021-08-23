import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta { //criação do molda da conta
    
    static numDeContasC = 0

//==================================================================

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numDeContasC++
    }

//==================================================================

sacar(valor) { //sobre-escrevendo o comportamento de sacar
    let taxa = 1.1
    return this._sacar(valor, taxa)
}

//==================================================================

}