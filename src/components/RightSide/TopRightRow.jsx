import React from 'react'
import styled from 'styled-components'
import AvatarImage from './AvatarImage'
import Switch from './Switch'

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 815px) {
    }  
`;
const TodaysHighlightsHeader = styled.div`
  font-weight: bold;
  margin-right: auto;
  margin-left: 1rem;
  @media (max-width: 815px) {
    } 
`
const TopRightRow = ({ unitsObj, setUnitsObj }) => (
  <FlexRowContainer>
    <TodaysHighlightsHeader>Week Forecast</TodaysHighlightsHeader>
    <Switch unitsObj={unitsObj} setUnitsObj={setUnitsObj} />
    <AvatarImage />
  </FlexRowContainer>
)
export default TopRightRow
