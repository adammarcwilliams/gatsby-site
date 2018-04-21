import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import NavLinks from '../components/NavLinks'
import SocialLinks from '../components/SocialLinks'
import theme from '../utils/theme'
import './index.css'
require('prismjs/themes/prism-solarizedlight.css')

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container className='Site-Container'>
      <NavLinks />
      {children()}
      <SocialLinks />
    </Container>
  </ThemeProvider>
)

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  max-Width: 1200px;
  margin: 0 auto;
  font-family: ${props => props.theme.copyText};
  font-size: 16px;

  @media (min-width: 700px) {
    font-size: 20px;
  }
`
