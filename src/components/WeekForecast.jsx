import styled from 'styled-components'
import React from 'react';
import { useSelector } from 'react-redux'
import ForecastIcon from './ForecastIcon'
import makeWeekDay from '../functions/makeWeekDay';
import makeDate from '../functions/makeDate';

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
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
    box-shadow: rgb(64 60 67 / 16%) 0px 2px 5px 1px;
    @media (max-width: 815px) {
      justify-content: space-around;
      height: 9rem;
      width: 7rem;
      margin-bottom: 0.5rem;
  }  
  `;

const WeekForecast = ({ setChosenDay }) => {
  const weekData = useSelector((store) => store.weather.forecastData)
  return (
    <FlexRowContainer>
      {weekData && weekData.map((elem, index) => (
        <PrettyDiv
          onClick={() => setChosenDay(index)}
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
