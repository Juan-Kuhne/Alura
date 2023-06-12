import React, { Component } from 'react'
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
   display: flex;
   font-size: 30px;
`

const LogoImg = styled.img`
   margin-right: 10px;
`

class Logo extends Component {
   render() {
      return(
         <LogoContainer>
            <LogoImg src={logo} alt='logo'/>
            <p><strong>Alura</strong>Books</p>
         </LogoContainer>
      )
   }
}

export default Logo;