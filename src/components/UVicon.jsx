import React from 'react'
import styled from 'styled-components'
import grSun from '../images/icons256/grSun.png'
import clearSky from '../images/icons256/clearSky.png'
import redSun from '../images/icons256/redSun.png'

const ImageTag = styled.img`
    width: 4rem;
    height: 3rem;
    object-fit: cover;
  `

const UVicon = ({ uvi }) => {
  const allTypes = [
    { uvi: 6, src: redSun },
    { uvi: 3, src: clearSky },
    { uvi: 0, src: grSun },
  ]
  const choosePic = allTypes.find((type) => uvi >= type.uvi)
  return (
    <ImageTag src={choosePic.src} alt="UVI icon" />
  )
}

export default UVicon
