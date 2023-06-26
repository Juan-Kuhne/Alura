import React, { Component } from 'react';
import styled from 'styled-components';
import Pesquisa from '../componentes/Pesquisa';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  overflow-x: hidden;
`

class Favoritos extends Component {
  render() {
    return (
      <AppContainer>
        <Pesquisa />
      </AppContainer>
    );
  }
}

export default Favoritos;
