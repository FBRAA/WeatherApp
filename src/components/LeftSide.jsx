/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from '@mui/material'
import Input from './Input'
import { getWeather } from '../redux/weatherSlice'
import { getForecast } from '../redux/forecastSlice'
import WeatherIcon from './WeatherIcon'
import windMeter from '../images/windMeter.jpg'

const key = process.env.REACT_APP_API_KEY

// const Primer = styled.div`
//   ${({ dates }) => dates &&
//     dates.map((date) => `
//       .react-calendar-${date} {
//         border: solid 1px blue;
//       }
//     `).join(' ')
//   `
// `

// const Primer2 = styled.div`
//       & > div {
//         background-color: blue;

//         &:first-child:not(${LeftStyledContainer}) {

//         }
//       }
//       ${LeftStyledContainer} {

//       }
/* background-color: ${({ color }) => color}; */
/* ${({ color }) => color && `background-color: ${color};`} */
//     `

const LeftStyledContainer = styled.div`
  padding: 2rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-items: flex-start;
  @media (max-width: 815px) {
    padding: 0rem 3rem 2rem 3rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
    align-items: center;
  }
  `
const DividerFolder = styled.div`
  @media (max-width: 815px) {
   display: none;
  }
`

const LargeText = styled.div`
  font-size: 4rem;
  @media (max-width: 815px) {
    font-size: 3rem;
    margin-left: 3rem;
  }
`

const MediumText = styled.div`
    font-size: 1.25rem;
    text-align: start;
`
const BottomLine = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: white;
  font-weight: bold;
  line-height: 1rem;
  padding-top: 1.5rem;
  margin-top: auto;
  background-image: url(${windMeter});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 20rem;
  height: 5rem;
  border-radius: 1rem;
  @media (max-width: 815px) {
    margin-top: 1rem;
    width: 100%;
  }
`

const LeftSide = ({ unitsObj }) => {
  const dispatch = useDispatch()
  const capitalizedString = (string) => string.charAt(0).toUpperCase() + string.slice(1)
  // const isLoading = useSelector((store) => store.weather.isLoading)
  // const weatherData = useSelector((store) => store.weather.data)
  const { units } = unitsObj
  const { degSymbol } = unitsObj
  const mainWeather = useSelector((store) => store.weather.main)
  const currentTemp = useSelector((store) => store.weather.currentTemp)
  const weatherType = useSelector((store) => store.weather.weatherType)
  const cityLat = useSelector((store) => store.weather.lat)
  const cityLon = useSelector((store) => store.weather.lon)
  const fetchedCity = useSelector((store) => store.weather.city)
  const city = 'Saint Petersburg'
  const [inputCity, setInputCity] = useState('')
  const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${key}`
  const inputCityURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=${units}&APPID=${key}`
  const inputCityForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=${units}&exclude=minutely,hourly,alerts&appid=${key}`
  const handleClick = () => {
    dispatch(getWeather(inputCityURL))
  }
  // initial mount
  // useEffect(() => {
  //   dispatch(getWeather(cityURL))
  // }, [])

  // all updates here
  useEffect(() => {
    if (inputCity) {
      dispatch(getWeather(inputCityURL))
    } else {
      dispatch(getWeather(cityURL))
    }
  }, [units])
  useEffect(() => {
    dispatch(getForecast(inputCityForecastURL))
  }, [cityLat, cityLon, units])
  return (
    <LeftStyledContainer>
      <Input
        setInputCity={setInputCity}
        inputCity={inputCity}
        handleClick={handleClick}
      />
      { mainWeather && <WeatherIcon mainWeather={mainWeather} />}
      <LargeText>
        {currentTemp && `${Math.round(currentTemp)}${degSymbol}`}
      </LargeText>
      <MediumText>
        {Intl.DateTimeFormat('en', {
          weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: false,
        }).format(new Date()) }
      </MediumText>
      <DividerFolder>
        <Divider sx={{ width: '15rem', margin: '0 0 1rem 0', padding: '1rem 0 0 0' }} />
      </DividerFolder>
      <div>
        {`${capitalizedString(weatherType)}`}
      </div>

      {fetchedCity && (
      <BottomLine>
        {`${fetchedCity}`}
        &#39;s weather forecast
      </BottomLine>
      )}
    </LeftStyledContainer>
  )
}

export default LeftSide
