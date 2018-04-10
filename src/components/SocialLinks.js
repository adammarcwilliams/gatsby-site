import React, { Component } from 'react'
import styled from 'styled-components'
import twitter from '../assets/svg/twitter.svg'
import github from '../assets/svg/github.svg'
import codepen from '../assets/svg/codepen.svg'

export default class extends Component {
  render () {
    return (
      <Links>
        <Link href='https://twitter.com/amwcodes' icon={twitter} />
        <Link href='https://github.com/adammarcwilliams' icon={github} />
        <Link href='https://codepen.io/adammarcwilliams' icon={codepen} />
      </Links>
    )
  }
}

const Links = styled.div`
  position: absolute;
  bottom: 20px;
  left: 40px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  text-shadow: none;
  display: inline-block;
  width: 35px;
  height: 35px;
  background: no-repeat contain center;
  background-image: url(${props => props.icon});
  color: ${props => props.theme.light};

  &:hover {
    opacity: 0.6;
    background-image: url(${props => props.icon});
  }
`
