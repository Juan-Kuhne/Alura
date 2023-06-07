import React, { Component } from 'react';
import './App.css';
import Logo from './componentes/index';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Logo></Logo>
        </header>
      </div>
    );
  }
}

export default App;
