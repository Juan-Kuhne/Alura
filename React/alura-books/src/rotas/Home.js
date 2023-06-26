import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../componentes/Header';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  overflow-x: hidden;
`

class Home extends Component {
  render() {
    return (
      <AppContainer>
        <Pesquisa />
        <UltimosLancamentos />
      </AppContainer>
    );
  }
}

export default Home;
