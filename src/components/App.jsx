/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
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
  box-shadow: rgb(64 60 67 / 16%) 0px 2px 5px 1px;

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
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { unitsObj, setUnitsObj }

  return (
    <UnitsContext.Provider value={value}>
      <GeneralContainer>
        <LeftSide />
        <RightSide />
      </GeneralContainer>
    </UnitsContext.Provider>
  )
}

export default App
