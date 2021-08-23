import { Cliente } from "./Cliente.js"

export class Conta {
    static numDeContas = 0

//==================================================================

    constructor(saldoInicial, cliente, agencia) {
        this._agencia = agencia
        this.cliente = cliente
        this._saldo = saldoInicial
        Conta.numDeContas++
    }

//==================================================================

    sacar(valor) {
        let taxa = 1
        return this._sacar(valor, taxa)
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valor
        }
    
        return 0
    }

    depositar(valor) {
        if (valor <= 0) return
        this._saldo += valor
    }

    transferir(valor, conta) {
        if(this._tipo == 'salario') return
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

    get agencia() {
        return this._agencia
    }
}