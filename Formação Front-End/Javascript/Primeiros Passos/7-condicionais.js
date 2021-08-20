console.log('\nTrabalhando com condicionais\n')

const listaDeDestinos = new Array( //criando uma lista
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

console.log("Destinos possíveis: ")
console.log(listaDeDestinos)

const idadeComprador = 20
const estaAcompanhada = false

if (idadeComprador < 18) {
    //a pessoa é menor de idade
    if (estaAcompanhada) {
        console.log('Comprador menor de idade, acompanhado')
        listaDeDestinos.splice(1, 1)
    } else {
        //a pessoa é maior de idade
        console.log('Comprador menor de idade, não posso vender')
    }
} else {
    console.log('Comprador maior de idade')
    listaDeDestinos.splice(1, 1)
}

console.log(listaDeDestinos)

// console.log(idadeComprador > 18 || estaAcompanhado)
// console.log(idadeComprador < 18 && estaAcompanhado)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador == 18)
// console.log(idadeComprador != 18)


console.log('')