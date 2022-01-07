import React from 'react'
import styled from 'styled-components'
import sunrise from '../images/iconsSVG/sunrise.svg'
import sunset from '../images/iconsSVG/sunset.svg'

const HighlightsIcon = ({ mainWeather }) => {
  const allTypes = [
    { name: 'sunrise', src: sunrise },
    { name: 'sunset', src: sunset },
  ]
  const ImageTag = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    @media (max-width: 815px) {
      width: 3rem;
      height: 3rem;
  }
  `
  const choosePic = allTypes.find((type) => type.name === mainWeather)
  return (
    <ImageTag src={choosePic.src} alt="lule" />
  )
}

export default HighlightsIcon
