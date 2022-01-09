/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from '@mui/material'
import Input from './Input'
import { getWeather } from '../redux/weatherSlice'
import WeatherIcon from './WeatherIcon'
import windMeter from '../images/windMeter.jpg'
import capitalizedString from '../functions/capitalizedString'
import UnitsContext from '../context/UnitsContext';

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

const LeftSide = () => {
  const dispatch = useDispatch()
  // const isLoading = useSelector((store) => store.weather.isLoading)
  const weatherData = useSelector((store) => store.weather.weatherData)
  const {
    mainWeather,
    currentTemp,
    weatherType,
    fetchedCity,
  } = weatherData

  const { unitsObj } = useContext(UnitsContext)
  const { units, degSymbol } = unitsObj
  const [inputCity, setInputCity] = useState('')

  const handleClick = () => {
    dispatch(getWeather({ inputCity, units }))
  }
  useEffect(() => {
    dispatch(getWeather({ inputCity, units }))
  }, [units])

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
      {weatherType && (
      <div>
        {`${capitalizedString(weatherType)}`}
      </div>
      )}

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
