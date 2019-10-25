import React from 'react'
import styled from '@emotion/styled'

const Header = styled.div`
  display: flex;
  width: 100%;
  background-color: #3AC191;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1{
    color: #393939;
    font-family: 'Montserrat', sans-serif;
  }
`

export default function (props) {
  return <Header>{props.children}</Header>
}