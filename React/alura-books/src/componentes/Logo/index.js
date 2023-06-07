import React, { Component } from 'react';
import logo from '../../imagens/logo.svg';
import './estilo.css'

class Logo extends Component {
   render() {
      return(
         <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong>Alura</strong>Books</p>
         </div>
      )
   }
}

export default Logo;