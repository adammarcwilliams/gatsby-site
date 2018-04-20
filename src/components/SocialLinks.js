import React, { Component } from 'react'
import styled from 'styled-components'
import twitter from '../assets/svg/twitter.svg'
import github from '../assets/svg/github.svg'
import codepen from '../assets/svg/codepen.svg'

export default class extends Component {
  render () {
    return (
      <SocialLinks className='SocialLinks'>
        <SocialLink className='SocialLink' href='https://twitter.com/amwcodes' icon={twitter} />
        <SocialLink className='SocialLink' href='https://github.com/adammarcwilliams' icon={github} />
        <SocialLink className='SocialLink' href='https://codepen.io/adammarcwilliams' icon={codepen} />
      </SocialLinks>
    )
  }
}

const SocialLinks = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 40px;
  white-space: nowrap;
`

const SocialLink = styled.a`
  text-decoration: none;
  text-shadow: none;
  display: inline-block;
  width: 35px;
  height: 35px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.icon});
  color: ${props => props.theme.light};
  margin-right: 20px;
  &:hover {
    opacity: 0.6;
    background-image: url(${props => props.icon});
  }
`
