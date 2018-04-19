import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import NavLinks from '../components/NavLinks'
import SocialLinks from '../components/SocialLinks'
import theme from '../utils/theme'
import './index.css'

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
  height: 100%;
  max-Width: 1200px;
  margin: 0 auto;
`
