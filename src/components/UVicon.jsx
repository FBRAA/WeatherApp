import React from 'react'
import styled from 'styled-components'
import grSun from '../images/icons256/grSun.png'
import yelSun from '../images/icons256/yelSun.png'
import redSun from '../images/icons256/redSun.png'

const UVicon = ({ uvi }) => {
  const allTypes = [
    { uvi: 3, src: grSun },
    { uvi: 6, src: yelSun },
    { uvi: 15, src: redSun },
  ]
  const ImageTag = styled.img`
    width: 4rem;
    height: 3rem;
    object-fit: cover;
  `
  const choosePic = allTypes.find((type) => uvi < type.uvi)
  return (
    <ImageTag src={choosePic.src} alt="UVI icon" />
  )
}

export default UVicon
