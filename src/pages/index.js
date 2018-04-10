import React, { Component } from 'react'
import styled, { ThemeProvider }  from "styled-components";
import NavLinks from '../components/NavLinks'
import SocialLinks from '../components/SocialLinks'
import TitleCard from '../components/TitleCard'
import theme from '../utils/theme'
import '../utils/index.css'

export default class extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <App>
          <Container> 
            <TitleCard />
            <NavLinks />
            <SocialLinks />
          </Container> 
        </App>
      </ThemeProvider>
    )
  }
}

const App = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.dark}
`

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${props => props.theme.dark}
`