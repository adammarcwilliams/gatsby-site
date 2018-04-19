import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <NavLinks className='NavLinks' >
        <StyledLink className='NavLink' to='/'>home</StyledLink>
        <StyledLink className='NavLink' to='/about/'>about</StyledLink>
        <StyledLink className='NavLink' to='/blog/'>blog</StyledLink>
      </NavLinks>
    )
  }
}

const NavLinks = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: block;
  background: none;
  padding: 0 40px;
  margin-top: 20px;
  z-index: 100;
  white-space: nowrap;
`

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  text-shadow: none;
  background: none;
  color: ${props => props.theme.light};
  font-size: 24px;;
  margin-right: 20px;

  &:hover {
    opacity: 0.6;
  }
`
