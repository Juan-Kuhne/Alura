import React, { useState } from "react";
import Input from "../Input";
import styled from "styled-components";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 270px;
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
`

function Pesquisa() {
   const [livrosPesquisados, setLivrosPesquisados] = useState([])

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
               <ItemPesquisa>
                  <p>{livro.nome}</p>
                  <img src={livro.src} />
               </ItemPesquisa>
            ))}
         </ResultadoPesquisaContainer>
      </PesquisaContainer>
   )

}

export default Pesquisa