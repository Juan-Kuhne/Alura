console.log()

class Cliente { //criação do molde do cliente
    nome
    cpf
}

class ContaCorrente { //criação do molda da conta
    agencia
    #saldo = 0

    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if (valor <= 0) return
        this.#saldo += valor
    }
}

const cliente1 = new Cliente()
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233309

const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309

const contaRicardo = new ContaCorrente()
contaRicardo.agencia = 1001

contaRicardo.depositar(100)
contaRicardo.depositar(100)
contaRicardo.depositar(100)

const valorSacado = contaRicardo.sacar(50)
console.log(valorSacado)

console.log(contaRicardo)

console.log()