import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <TitleCard class='TitleCard'>
        <Name class='name'>Adam Marc Williams</Name>
        <Role class='role'>Creative Developer</Role>
        <Company class='company'>@Rhythm Digital</Company>
      </TitleCard>
    )
  }
}

const TitleCard = styled.div`
  position: relative;
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  color: ${props => props.theme.light};
  line-height: 30px;
  white-space: nowrap;
`

const Name = styled.div`
  display: block;
  font-family: 'Oswald';
  font-weight: 700;
  font-size: 30px;
`
const Role = styled.div`
  display: block;
  font-size: 24px;
  margin-top: 5px;
`
const Company = styled.div`
  display: block;
  font-size: 20px;
`
