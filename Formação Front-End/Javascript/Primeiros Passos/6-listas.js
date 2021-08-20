console.log(`\nTrabalhando com listas\n`)

const salvador = `Salvador`
const saoPaulo = `São Paulo`
const rioDeJaneiro = `Rio de Janeiro`

console.log(`Destinos possíveis: ${salvador} /  ${saoPaulo} / ${rioDeJaneiro}`)
console.log('//===============================================================================')
//===============================================================================

const listaDeDestinos = new Array( //criando uma lista
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

console.log(listaDeDestinos)
listaDeDestinos.push('Curitiba') //adicionando valores na lista
console.log(listaDeDestinos)
listaDeDestinos.splice(1, 1) //removendo valores da lista
console.log(listaDeDestinos)
console.log(listaDeDestinos[1]) //selecionando valores da lista


console.log('')