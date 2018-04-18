import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <Container>
        <Canvas width={'100%'} height={'100%'} innerRef={(ref) => { this.canvas = ref; }} />
      </Container>
    )
  }
}

const Container = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Canvas = styled.canvas`
  position: relative;
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
`
