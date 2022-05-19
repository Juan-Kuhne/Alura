console.log()

import { Cliente } from "./Cliente.js"//recomendado usar o caminho completo no from
// import { ContaCorrente } from "./Conta/ContaCorrente.js"
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
// import { ContaSalario } from "./Conta/ContaSalario.js"
import { Gerente } from "./Funcionário/Gerente.js"
import { Diretor } from "./Funcionário/Diretor.js"
import { SistemaAtuenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor('Rodrigo', 10000, 12345678900)
const gerente = new Gerente('Ricardo', 5000, 12378945601)
const cliente = new Cliente('Lais', 78945612379, '456')

diretor.cadastrarSenha('123456')
gerente.cadastrarSenha('123')

const gerenteLogado = SistemaAtuenticacao.login(gerente, '123')
const diretorLogado = SistemaAtuenticacao.login(diretor, '123456')
const clienteLogado = SistemaAtuenticacao.login(cliente, '456')

console.log('Gerente:', gerenteLogado? '=online=' : '=offline=')
console.log('Diretor:', diretorLogado? '=online=' : '=offline=')
console.log('Cliente:', clienteLogado? '=online=' : '=offline=')

console.log()
