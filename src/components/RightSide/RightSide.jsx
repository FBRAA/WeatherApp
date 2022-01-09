import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import WeekForecast from '../WeekForecast'
import TopRightRow from './TopRightRow'
import PrettyHighlights from '../PrettyHighlights'

const RightStyledContainer = styled.div`
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  flex-direction: column;
  flex-grow: 3;
  padding: 1.75rem 3rem 1.75rem 3rem;
  background-color: #f7f7f5;
  display: flex;
  justify-content: space-between;
  @media (max-width: 815px) {
    border-top-right-radius: 0rem;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 3rem;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 0rem 3rem 1.75rem 3rem;
  }  
  /* background-color: ${({ color }) => color}; */
  /* ${({ color }) => color && `background-color: ${color};`} */
  
  `
const FlexRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const TodaysHighlightsHeader = styled.div`
  font-weight: bold;
  margin-right: auto;
  margin-left: 1rem;
    @media (max-width: 815px) {
    padding: 1rem 0 1rem 0;
  }  
`

const RightSide = () => {
  const weekData = useSelector((store) => store.weather.forecastData)
  const [chosenDay, setChosenDay] = useState(0)

  return (
    <RightStyledContainer>
      <TopRightRow />
      <WeekForecast chosenDay={chosenDay} setChosenDay={setChosenDay} />
      <FlexRowContainer>
        <TodaysHighlightsHeader> Day&#39;s Highlights </TodaysHighlightsHeader>
      </FlexRowContainer>
      { weekData && <PrettyHighlights chosenDay={chosenDay} />}
    </RightStyledContainer>
  )
}

export default RightSide
