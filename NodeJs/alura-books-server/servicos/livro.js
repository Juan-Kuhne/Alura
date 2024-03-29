const fs = require('fs')

function getTodosLivros() {
   return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
   const livros = JSON.parse(fs.readFileSync('livros.json'))
   const livroFiltrado =  livros.filter(livro => livro.id === id)[0]
   return livroFiltrado
}

function insereLivro(livroNovo) {
   const livros = JSON.parse(fs.readFileSync('livros.json'))
   const novaLista = [...livros, livroNovo]
   fs.writeFileSync("livros.json", JSON.stringify(novaLista))
}

function modificaLivro(modificacoes, id) {
   let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
   const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

   const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes } // modifica apenas os campos do objeto que vieram no objeto modificacoes

   livrosAtuais[indiceModificado] = conteudoMudado

   fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
   const livros = JSON.parse(fs.readFileSync('livros.json'))
   // livros.splice(livros.findIndex(livro => livro.id === id), 1)
   const livrosFiltrados = livros.filter( livro => livro.id !== id )
   fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados))
}

module.exports = {
   getTodosLivros,
   getLivroPorId,
   insereLivro,
   modificaLivro,
   deletaLivroPorId
}