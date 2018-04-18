import React, { Component } from 'react'
import styled from 'styled-components'
import TitleCard from '../components/TitleCard'
import BackgroundWebGL from '../components/BackgroundWebGL'
require('../utils/bootstrap')

export default class extends Component {
  componentDidMount () {
    console.log('Data:', this.props.data)
  }
  render () {
    return (
      <App>
        <Container>
          <TitleCard />
          <BackgroundWebGL />
        </Container>
      </App>
    )
  }
}

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

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
