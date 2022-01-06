/* eslint-disable react/function-component-definition */
import React, { useState } from 'react'
import GeneralContainer from './GeneralContainer'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

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
