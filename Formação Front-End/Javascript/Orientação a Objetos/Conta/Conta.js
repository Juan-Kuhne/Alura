import { Cliente } from '../Cliente.js'

export class Conta { //classe abstrata
    static numDeContas = 0

//==================================================================

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Classe abstrata Conta, não instanciar")
        }

        this._agencia = agencia
        this.cliente = cliente
        this._saldo = saldoInicial
        Conta.numDeContas++
    }

//==================================================================

    sacar(valor) {
        throw new Error("O método abstrato 'sacar' da Conta chamado")
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