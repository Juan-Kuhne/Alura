import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import '@flaticon/flaticon-uicons/css/all/all.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './rotas/Home';
import Favoritos from './rotas/Favoritos';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  i.favIcon {
    position: absolute;
    right: .2rem;
    top: .2rem;
    opacity: 0;
    cursor: pointer;
    transition: opacity .5s;

    &:hover { color: yellow; }
  }
`

ReactDOM.render(
  <div>
    <GlobalStyle/>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
