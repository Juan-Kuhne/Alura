import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

const HeaderContainer = styled.header`
   display: flex;
   justify-content: center;
   background-color: #fff;
`

function Header() {
   return(
      <HeaderContainer>
         <Logo/>
         <OpcoesHeader/>
         <IconesHeader/>
      </HeaderContainer>
   )
}

export default Header;