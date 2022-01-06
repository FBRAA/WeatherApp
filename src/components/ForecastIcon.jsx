import React from 'react'
import styled from 'styled-components'
import clearSky from '../images/icons256/clearSky.png'
import clouds from '../images/icons256/clouds.png'
// import fewClouds from '../images/icons256/fewClouds.png'
import mist from '../images/icons256/mist.png'
import rain from '../images/icons256/rain.png'
import showerRain from '../images/icons256/showerRain.png'
import snow from '../images/icons256/snow.png'
import thunderstorm from '../images/icons256/thunderstorm.png'

const ForecastIcon = ({ mainWeather }) => {
  const allTypes = [
    { name: 'Thunderstorm', src: thunderstorm },
    { name: 'Drizzle', src: rain },
    { name: 'Rain', src: showerRain },
    { name: 'Snow', src: snow },
    { name: 'Clear', src: clearSky },
    { name: 'Clouds', src: clouds },
    { name: null, src: mist },
  ]
  const ImageTag = styled.img`
    width: 5rem;
    height: 3rem;
    object-fit: cover;
  `
  let choosePic = allTypes.find((type) => type.name === mainWeather)
  if (choosePic === undefined) {
    choosePic = allTypes.find((type) => type.name === null)
  }
  return (
    <ImageTag src={choosePic.src} alt="lule" />
  )
}

export default ForecastIcon
