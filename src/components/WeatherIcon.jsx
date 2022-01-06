import React from 'react'
import styled from 'styled-components'
import clearSky from '../images/iconsSVG/clearSky.svg'
import clouds from '../images/iconsSVG/clouds.svg'
// import fewClouds from '../images/iconsSVG/fewClouds.svg'
import mist from '../images/iconsSVG/mist.svg'
import rain from '../images/iconsSVG/rain.svg'
import showerRain from '../images/iconsSVG/showerRain.svg'
import snow from '../images/iconsSVG/snow.svg'
import thunderstorm from '../images/iconsSVG/thunderstorm.svg'

const ImageTag = styled.img`
    width: 10rem;
    height: 15rem;
    object-fit: cover;
  `

const WeatherIcon = ({ mainWeather }) => {
  const allTypes = [
    { name: 'Thunderstorm', src: thunderstorm },
    { name: 'Drizzle', src: rain },
    { name: 'Rain', src: showerRain },
    { name: 'Snow', src: snow },
    { name: 'Clear', src: clearSky },
    { name: 'Clouds', src: clouds },
    { name: null, src: mist },
  ]
  let choosePic = allTypes.find((type) => type.name === mainWeather)
  if (choosePic === undefined) {
    choosePic = allTypes.find((type) => type.name === null)
  }
  return (
    <ImageTag src={choosePic.src} alt="lule" />
  )
}

export default WeatherIcon
