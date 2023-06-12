import React, {Component} from 'react'
import styled from 'styled-components';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

const Opcoes = styled.ul`
   display: flex;
`

const Opcao = styled.li`
   min-width: 120px;
   font-size: 16px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100%;
   padding: 0 5px;
   cursor: pointer;
`

class OpcoesHeader extends Component {
   render() {
      return (
         <Opcoes>
            { textoOpcoes.map((opcao) => (
              <Opcao><p>{opcao}</p></Opcao>
            )) }
          </Opcoes>
      )
   }
}

export default OpcoesHeader;