import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <NavLinks>
        <StyledLink to='/'>home</StyledLink>
        <StyledLink to='/about/'>about</StyledLink>
        <StyledLink to='/experiments/'>experiments</StyledLink>
      </NavLinks>
    )
  }
}

const NavLinks = styled.div`
  position: absolute;
  top: 20px;
  left: 40px;
  display: block;
  background: none;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  text-shadow: none;
  background: none;
  color: ${props => props.theme.light};
  font-size: 24px;
  padding-bottom: 5px;
  margin-right: 20px;

  &:hover {
    opacity: 0.6;
  }
`
