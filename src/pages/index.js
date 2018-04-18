import React, { Component } from 'react'
import styled from 'styled-components'
import TitleCard from '../components/TitleCard'
import Visualiser from '../components/Visualiser'
require('../utils/bootstrap');

export default class extends Component {
  render () {
    return (
      <App>
        <Container>
          <TitleCard />
          <Visualiser />
        </Container>
      </App>
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
