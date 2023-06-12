import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './componentes/Header';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header/>
      </AppContainer>
    );
  }
}

export default App;
