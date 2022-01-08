import React from 'react'
import styled from 'styled-components'
import allWeatherTypes from '../constants/allWeatherTypes'

const ImageTag = styled.img`
  width: 10rem;
  height: 15rem;
  object-fit: cover;
  @media (max-width: 815px) {
    height: 10rem;
  }  
`

const WeatherIcon = ({ mainWeather }) => (
  <ImageTag src={allWeatherTypes[mainWeather]} alt="weather icon" />
)

export default WeatherIcon
