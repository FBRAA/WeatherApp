import React from 'react'
import styled from 'styled-components'
import sunrise from '../images/iconsSVG/sunrise.svg'
import sunset from '../images/iconsSVG/sunset.svg'

const ImageTag = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    @media (max-width: 815px) {
      width: 3rem;
      height: 3rem;
    }
`
const allTypes = {
  sunrise,
  sunset,
}

const HighlightsIcon = ({ mainWeather }) => (
  <ImageTag src={allTypes[mainWeather]} alt="sun image" />
)

export default HighlightsIcon
