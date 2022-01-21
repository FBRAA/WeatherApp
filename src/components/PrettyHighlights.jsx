import styled from 'styled-components'
import React, { useContext } from 'react';
import { useSelector } from 'react-redux'
import HighlightsIcon from './HighlightsIcon';
import UVicon from './UVicon';
import WindIcon from './WindIcon';
import windDirection from '../functions/windDirections';
import UnitsContext from '../context/UnitsContext';

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 815px) {
  }  
`
const PrettyDiv = styled.div`
  height: 12rem;
  width: 17rem;
  background-color: white;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  box-shadow: rgb(64 60 67 / 16%) 0px 2px 5px 1px;
  @media (max-width: 815px) {
    height: 10.5rem;
    width: 14rem;
  }
`
const CoolHeading = styled.div`
  color: #8b84849b;
  font-size: 1.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const InformationLine = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  `
const SunLine = styled.div`
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
const UnitsLine = styled.div`
  font-size: 2rem;
  `
const WindRotater = styled.div`
    transform: rotate(${(props) => (`${props.windDeg + 270}deg`)});
    margin-right: 1rem;
  `

const PrettyHighlights = ({ chosenDay }) => {
  const weekData = useSelector((store) => store.weather.forecastData)
  // const isLoading = useSelector((store) => store.forecast.isLoading)
  const {
    windSpeed,
    pressure,
    humidity,
    uvi,
    sunrise,
    sunset,
    feelsLike,
    windDeg,
  } = weekData[chosenDay]

  const { unitsObj } = useContext(UnitsContext)
  const { degSymbol, windSymbol } = unitsObj

  return (
    <FlexRowContainer>
      <PrettyDiv>
        <CoolHeading>Feels like</CoolHeading>
        <InformationLine>
          {Math.round(feelsLike)}
          {degSymbol}
        </InformationLine>
      </PrettyDiv>
      <PrettyDiv>
        <CoolHeading>Wind Status</CoolHeading>
        <InformationLine>
          {Math.round(windSpeed)}
          <UnitsLine>
            {windSymbol}
          </UnitsLine>
        </InformationLine>
        {(windDeg || windDeg === 0) && (
          <InformationLine>
            <WindRotater windDeg={windDeg}>
              <WindIcon />
            </WindRotater>
            <UnitsLine>
              {windDirection(windDeg)}
            </UnitsLine>
          </InformationLine>
        )}
      </PrettyDiv>
      <PrettyDiv>
        <CoolHeading>Pressure</CoolHeading>
        <InformationLine>
          {pressure}
          <UnitsLine>mmHg</UnitsLine>
        </InformationLine>
      </PrettyDiv>
      <PrettyDiv>
        <CoolHeading>Humidity</CoolHeading>
        <InformationLine>
          {humidity}
          <UnitsLine> %</UnitsLine>
        </InformationLine>
      </PrettyDiv>
      <PrettyDiv>
        <CoolHeading>UV Index</CoolHeading>
        <InformationLine>
          {Math.round(uvi)}
          <UVicon uvi={uvi} />
        </InformationLine>
      </PrettyDiv>
      <PrettyDiv>
        <CoolHeading>Sunrise & sunset</CoolHeading>
        <SunLine>
          <HighlightsIcon mainWeather="sunrise" />
          {new Date(sunrise * 1000).toLocaleTimeString('en-US')}
        </SunLine>
        <SunLine>
          <HighlightsIcon mainWeather="sunset" />
          {new Date(sunset * 1000).toLocaleTimeString('en-US')}
        </SunLine>
      </PrettyDiv>
    </FlexRowContainer>
  )
}

export default PrettyHighlights
