import React from 'react'

export default React.createContext(
  {
    units: '',
    degSymbol: '',
    windSymbol: '',
    setUnits: () => {},
  },
)
