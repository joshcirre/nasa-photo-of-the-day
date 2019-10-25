import React from 'react'
import styled from '@emotion/styled'

const PrevNextButton = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #F24C6A;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
    transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    &:hover {
        background: #C32A45;
    }
    &:active {
        transform: scale(0.95);
    }
`

export default function(props) {
  return <PrevNextButton onClick={props.onClick} disabled={props.disabled}>{props.nav}</PrevNextButton>
}