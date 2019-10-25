import React from 'react'
import styled from '@emotion/styled'

const CustomInput = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #C32A45;
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
        background: #F24C6A;
    }
`

export default function(props) {
  return <CustomInput onClick={props.onClick} disabled={props.disabled}>{props.value}</CustomInput>
}