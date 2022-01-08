import React from 'react'
import styled from 'styled-components'
import allWeatherTypes from '../constants/allWeatherTypes'

const ImageTag = styled.img`
    width: 5rem;
    height: 3rem;
    object-fit: cover;
  `
const ForecastIcon = ({ mainWeather }) => (
  <ImageTag src={allWeatherTypes[mainWeather]} alt="weather type" />
)

export default ForecastIcon
