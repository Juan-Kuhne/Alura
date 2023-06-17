import React from "react"
import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import livro2 from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
   background-color: #EBECEE;
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;
`

const NovosLivrosContainer = styled.div`
   margin-top: 30px;
   display: flex;
   width: 100%;
   justify-content: center;
   gap: 2rem;

   img {
      cursor: pointer;
   }
`

function UltimosLancamentos() {
   return (
      <UltimosLancamentosContainer>
         <Titulo cor="#EB9B00" tamanhoFonte="36px">ULTIMOS LANÇAMENTOS</Titulo>
         <NovosLivrosContainer>
            {livros.map( livro => (
               <img src={livro.src} alt={livro.nome} />
            ))}
         </NovosLivrosContainer>
         <CardRecomenda 
            titulo="Talvez você se enteresse por ..."
            subtitulo="Angular 11"
            descricao="Construindo uma aplicação integrada com a plataforma Google."
            img={livro2}
         />
      </UltimosLancamentosContainer>
   )
}

export default UltimosLancamentos