import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import NavLinks from '../components/NavLinks'
import SocialLinks from '../components/SocialLinks'
import theme from '../utils/theme'
import './index.css'

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      {children()}
      <NavLinks />
      <SocialLinks />
    </Container>
  </ThemeProvider>
)

const Container = styled.div`
  margin: 0 auto;
  maxWidth: 1200px;
`
