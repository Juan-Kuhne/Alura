import React, { Component } from 'react';
import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones = [perfil, sacola];

class IconesHeader extends Component {
   render() {
      return(
         <ul className='icones'>
            { icones.map((icone) => (
              <li className='icone'><img src={icone} alt='icone'></img></li>
            )) }
          </ul>
      )
   }
}

export default IconesHeader;