import React, { Component } from 'react';
import './estilo.css';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

class Header extends Component {
   render() {
      return(
         <header className='App-header'>
          <Logo/>
          <OpcoesHeader/>
          <IconesHeader/>
        </header>
      )
   }
}

export default Header;