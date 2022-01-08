import React from 'react'
import styled from 'styled-components'
import clearSky from '../images/iconsSVG/clearSky.svg'
import clouds from '../images/iconsSVG/clouds.svg'
// import fewClouds from '../images/iconsSVG/fewClouds.svg'
import mist from '../images/iconsSVG/mist.svg'
import rain from '../images/iconsSVG/rain.svg'
// import showerRain from '../images/iconsSVG/showerRain.svg'
import snow from '../images/iconsSVG/snow.svg'
import thunderstorm from '../images/iconsSVG/thunderstorm.svg'

const ImageTag = styled.img`
    width: 10rem;
    height: 15rem;
    object-fit: cover;
    @media (max-width: 815px) {
      height: 10rem;
  }  
  `

const WeatherIcon = ({ mainWeather }) => {
  const allTypes = {
    Thunderstorm: thunderstorm,
    Drizzle: rain,
    Snow: snow,
    Clear: clearSky,
    Clouds: clouds,
    [undefined]: mist,
  }
  const findPic = allTypes[mainWeather]
  return (
    <ImageTag src={findPic} alt="weather icon" />
  )
}

export default WeatherIcon
