import React, {Component} from 'react'
import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

class OpcoesHeader extends Component {
   render() {
      return (
         <ul className='opcoes'>
            { textoOpcoes.map((opcao) => (
              <li className='opcao'><p>{opcao}</p></li>
            )) }
          </ul>
      )
   }
}

export default OpcoesHeader;