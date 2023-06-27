import React, { useEffect, useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   min-height: 270px;
   width: 100%;
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
`

const Subtitulo = styled.h3`
   font-size: 16px;
   font-weight: 500;
   margin-bottom: 40px;
`

const ResultadoPesquisaContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;
   margin-top: 3rem;
   padding: 1rem 0;
   flex-wrap: wrap;
`

const ItemPesquisa = styled.div`
   border-radius: 8px;
   padding: 0 8px;
   transition: all .5s ease;

   &:hover {
      box-shadow: 0 0 0 1px #fff;
      transform: scale(1.05);
   }

   img {
      max-width: 209px;
   }
`

function Pesquisa() {
   const [livrosPesquisados, setLivrosPesquisados] = useState([])
   const [ livros, setLivros ] = useState([])
   
   useEffect(() => {
      fetchLivros()
   }, [])

   async function fetchLivros() {
      const livrosDaAPI = await getLivros()
      setLivros(livrosDaAPI)
   }

   async function insertFavorito(id) {
      await postFavorito(id)
      alert(`Livro de id:${id} inserido!`)
   }

   return (
      <PesquisaContainer>
         <Titulo>Já sabe por onde começar?</Titulo>
         <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
         <Input
            placeholder="Escreva sua próxima leitura"
            onBlur={(e) => {
               const textoDigitado = e.target.value.toLowerCase()
               const resultadoPesquisa = livros.filter((livro) => livro.nome.toLowerCase().includes(textoDigitado))
               setLivrosPesquisados(resultadoPesquisa)
            }}
         />
         <ResultadoPesquisaContainer>
            {livrosPesquisados.map(livro => (
               <ItemPesquisa onClick={() => insertFavorito(livro.id)}>
                  <p>{livro.nome}</p>
                  <img src={livro.src} alt={livro.nome} />
               </ItemPesquisa>
            ))}
         </ResultadoPesquisaContainer>
      </PesquisaContainer>
   )

}

export default Pesquisa