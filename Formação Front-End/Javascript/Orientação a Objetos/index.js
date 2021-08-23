console.log()

import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js"
import { ContaCorrente } from "./ContaCorrente.js" //recomendado usar o caminho completo no from
import { ContaPoupanca } from "./ContaPoupanca.js"

const cliente1 = new Cliente('Ricardo', 11122233309)

const contaRicardo = new Conta(0, cliente1, 1001)
contaRicardo.depositar(500)
contaRicardo.sacar(100)

const contapp = new Conta(50, cliente1, contaRicardo.agencia)

console.log(contaRicardo)
console.log(contapp)

console.log()
