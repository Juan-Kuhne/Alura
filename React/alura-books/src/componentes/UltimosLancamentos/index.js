import React from "react"
import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"

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
      </UltimosLancamentosContainer>
   )
}

export default UltimosLancamentos