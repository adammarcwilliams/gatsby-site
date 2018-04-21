import React, { Component } from 'react'
import styled from 'styled-components'
import TitleCard from '../components/TitleCard'
import BackgroundWebGL from '../components/BackgroundWebGL'
import emmaLouise from '../assets/video/Emma-Louise.mp4'
import grid from '../assets/images/grid.png'

export default class extends Component {
  componentDidMount () {
    console.log('Data:', this.props.data)
  }
  render () {
    return (
      <Content className='Content'>
        {/* <Video src={emmaLouise} type='video/mp4' preload='auto' playsInline autoPlay muted loop />
        <Grid image={grid} /> */}
        <TitleCard />
        {/* <BackgroundWebGL /> */}
      </Content>
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
const Content = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
`
const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  opacity: 0.5;
`
const Grid = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANklEQVQYlWNYtWqVMQMSWLVqlTE2MQZcAhiS+CQImoTVZGyKsComWiHRVpPkGVyewqsLV4ADAEr5TuVwzxgzAAAAAElFTkSuQmCC);
  opacity: 0.3;
  background-repeat: repeat;
`
