/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import RightSide from './RightSide/RightSide'

const GeneralContainer = styled.div`
  display: flex;
  flex: row wrap;
  justify-content: space-between;
  height: 80vh;
  width: 80vw;
  background-color: white;
  border-radius: 3rem;
  margin: auto;
`

const App = () => {
  // common state for the full app section
  const [unitsObj, setUnitsObj] = useState({
    units: 'metric',
    degSymbol: '°C',
    windSymbol: 'meters/s',
  })

  return (
    <GeneralContainer>
      <LeftSide unitsObj={unitsObj} />
      <RightSide unitsObj={unitsObj} setUnitsObj={setUnitsObj} />
    </GeneralContainer>
  )
}

export default App
