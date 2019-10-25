import React from 'react'
import styled from '@emotion/styled'

const Header = styled.div`
  display: flex;
  width: 100%;
  background-color: #3AC191;
  padding-bottom: 2rem;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;
  height: 200px;
  flex-direction: column;
  margin: 0 auto;
  h1{
    color: #3F3D56;
    font-family: 'Montserrat', sans-serif;
  }
`

export default function (props) {
  return <Header>{props.children}</Header>
}