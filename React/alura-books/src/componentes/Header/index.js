import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
   display: flex;
   justify-content: center;
   background-color: #fff;
`

function Header() {
   return(
      <HeaderContainer>
         <Link to='/'>
            <Logo/>
         </Link>
         <OpcoesHeader/>
         <IconesHeader/>
      </HeaderContainer>
   )
}

export default Header;