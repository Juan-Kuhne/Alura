import { Cliente } from "./Cliente.js"

export class ContaCorrente { //criação do molda da conta
    agencia
    
    static numDeContas = 0

    _cliente
    _saldo = 0

//==================================================================

    constructor(cliente, agencia) {
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numDeContas++
    }

//==================================================================

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if (valor <= 0) return
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

//==================================================================

    get cliente() {
        return this._cliente
    }

    set cliente (cliente) {
        if(cliente instanceof Cliente) {
            this._cliente = cliente
        }
    }

    get saldo() {
        return this._saldo
    }
}