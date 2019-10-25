import React from 'react'
import { useAppContext } from '../App'
import styled from '@emotion/styled'

const Image = styled.img`
  width: 100vh;
  height: 50vh;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const Iframe = styled.iframe`
  height: 50vh;
  width: 100vh;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px 16px;
  h1  {
    text-align: center;
    font-family: sans-serif;
    border-bottom: 5px #F24C6A solid;
    color: #3F3D56;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    padding-top: 20px;
  }
`

export default function () {
  const { pictureList, date } = useAppContext()
  return (
    <ImageContainer>
      {(pictureList) && pictureList.map((picture, index) => {
        return (picture.date === date) && (
          <div key={index}>
            <h1>{`${picture.title} - ${picture.date}`}</h1>
            {(picture.media_type === 'image') && <Image src={picture.hdurl} alt={`${picture.title}`} />}
            {(picture.media_type === 'video') && <Iframe src={picture.url} title={`${picture.title}`} />}
          </div>
        )
      })}
    </ImageContainer>
  )
}