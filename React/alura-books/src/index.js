import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

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
    <App />
  </div>,
  document.getElementById('root')
);
