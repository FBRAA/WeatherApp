import React from 'react'
import styled from 'styled-components'
import AvatarImage from './AvatarImage'
import Switch from './Switch'

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`
const TodaysHighlightsHeader = styled.div`
  font-weight: bold;
  margin-right: auto;
  margin-left: 1rem;
`
const TopRightRow = () => (
  <FlexRowContainer>
    <TodaysHighlightsHeader>Week Forecast</TodaysHighlightsHeader>
    <Switch />
    <AvatarImage />
  </FlexRowContainer>
)
export default TopRightRow
