import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  li {
    list-style: none;
  }
`

ReactDOM.render(
  <div>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/favoritos' element={<p>favoritos!</p>} />
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
