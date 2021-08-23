console.log()

import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js" //recomendado usar o caminho completo no from

const cliente1 = new Cliente('Ricardo', 11122233309)
const cliente2 = new Cliente('Alice', 88822233309)

const contaRicardo = new ContaCorrente(cliente1, 1001)
contaRicardo.depositar(500)

const contaAlice = new ContaCorrente(cliente2, 102)
let valor = 200
contaRicardo.transferir(valor, contaAlice)

console.log(contaRicardo)
console.log(contaAlice)
console.log('Número de contas:', ContaCorrente.numDeContas)

console.log()