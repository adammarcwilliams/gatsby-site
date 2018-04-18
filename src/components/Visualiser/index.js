import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <Container>
        <a-scene>
          <a-assets>
            <audio id='dance' src='/static/172549__snapper4298__funky-beatz-105bpm.wav' autoPlay preload />
          </a-assets>
          <a-entity camera position='0 1.6 0' />
          <a-icosahedron radius='2' detail='1' position='0 1.6 -5' material='color: #2cb5e8; flatShading: true' />
          <a-entity light='type: directional; intensity: 0.6;' position='1.9  5.6 4.7' />
          <a-entity light='type: ambient; intensity: 0.2' />
          <a-entity sound='src: #dance; autoPlay: true' audio-analyser='dance' />
        </a-scene>
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
