import React, { Component } from 'react';
import './App.css';
import logo from './imagens/logo.svg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
