console.log()

import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js" //recomendado usar o caminho completo no from
import { ContaPoupanca } from "./ContaPoupanca.js"
import { ContaSalario } from "./ContaSalario.js"

const cliente1 = new Cliente('Ricardo', 11122233309)

const contaRicardo = new ContaCorrente(cliente1, 1001)
const contapp = new ContaPoupanca(50, cliente1, contaRicardo.agencia)
const contaS = new ContaSalario(cliente1)
contaS.depositar(100)
contaS.sacar(10)

console.log(contaRicardo)
console.log(contapp)
console.log(contaS)

console.log()
