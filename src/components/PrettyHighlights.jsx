import styled from 'styled-components'
import React from 'react';
import { useSelector } from 'react-redux'
import HighlightsIcon from './HighlightsIcon';
import UVicon from './UVicon';
import WindIcon from './WindIcon';

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
  /* width: 17rem;
  @media (max-width: 815px) {
    width: 14rem;
  } */
`
const InformationLine = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: baseline;
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

const PrettyHighlights = ({ chosenDay, unitsObj }) => {
  const weekData = useSelector((store) => store.forecast.weekData)
  // const isLoading = useSelector((store) => store.forecast.isLoading)
  const { windSpeed } = weekData[chosenDay]
  const { pressure } = weekData[chosenDay]
  const { humidity } = weekData[chosenDay]
  const { uvi } = weekData[chosenDay]
  const feelsLike = weekData[chosenDay].feels_like
  const { sunrise } = weekData[chosenDay]
  const { sunset } = weekData[chosenDay]
  const windDeg = weekData[chosenDay].wind_deg
  // eliminating original SVG icon rotation from east to north
  const windDir = `${windDeg + 270}deg`
  const { degSymbol } = unitsObj
  const { windSymbol } = unitsObj
  const WindRotater = styled.div`
    transform: rotate(${windDir});
    margin-right: 1rem;
  `
  const windDirection = () => {
    const directions = [
      { deg: 22.5, dir: 'N' },
      { deg: 67.5, dir: 'NE' },
      { deg: 112.5, dir: 'E' },
      { deg: 157.5, dir: 'SE' },
      { deg: 202.5, dir: 'S' },
      { deg: 247.5, dir: 'SW' },
      { deg: 292.5, dir: 'W' },
      { deg: 337.5, dir: 'NW' },
      { deg: 360, dir: 'N' },
    ]
    return directions.find((elem) => windDeg < elem.deg).dir
  }
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
            <WindRotater>
              <WindIcon windDir={{ windDir }} />
            </WindRotater>
            <UnitsLine>
              {windDirection()}
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
