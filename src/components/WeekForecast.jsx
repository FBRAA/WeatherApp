import styled from 'styled-components'
import React from 'react';
import { useSelector } from 'react-redux'
import ForecastIcon from './ForecastIcon'

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const WeekForecast = ({ setChosenDay }) => {
  const makeWeekDay = (dt) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (
      days[
        new Date(
          dt
           * 1000,
        ).getDay()]);
  }
  const makeDate = (dt) => (
    new Date(dt * 1000).getDate()
  )
  const weekData = (useSelector((store) => store.forecast.weekData))
  const onClick = (index) => {
    setChosenDay(index)
  }
  const PrettyDiv = styled.div`
    height: 7rem;
    width: 6rem;
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;
  return (
    <FlexRowContainer>
      {weekData && weekData.map((elem, index) => (
        <PrettyDiv
          onClick={() => onClick(index)}
        >
          <div>{`${makeWeekDay(elem.dt)}, ${makeDate(elem.dt)}`}</div>
          <ForecastIcon mainWeather={elem.mainWeather} />
          <div>{`${Math.round(elem.maxTemp)}, ${Math.round(elem.minTemp)}`}</div>
        </PrettyDiv>
      ))}
    </FlexRowContainer>
  )
}
export default WeekForecast
