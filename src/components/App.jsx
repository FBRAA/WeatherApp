/* eslint-disable react/function-component-definition */
import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import UnitsContext from '../context/UnitsContext'
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
  @media (max-width: 815px) {
    display: flex;
    flex-direction: column;
    height: 95vh;
    width: 90vw;
  }
`

const App = () => {
  // common state for the full app section
  const [unitsObj, setUnitsObj] = useState({
    units: 'metric',
    degSymbol: '°C',
    windSymbol: 'meters/s',
  })
  const value = useMemo(() => ({ unitsObj, setUnitsObj }), [unitsObj]);

  return (
    <UnitsContext.Provider value={value}>
      <GeneralContainer>
        <LeftSide unitsObj={unitsObj} />
        <RightSide />
      </GeneralContainer>
    </UnitsContext.Provider>
  )
}

export default App
