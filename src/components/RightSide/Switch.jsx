import React, { useContext } from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import UnitsContext from '../../context/UnitsContext';

const MetricSwitch = () => {
  const { unitsObj, setUnitsObj } = useContext(UnitsContext)
  return (
    <Stack
      direction="row"
      spacing={0}
      alignItems="center"
      sx={{ 'margin-left': 'auto', 'margin-right': '1rem' }}
    >
      <Typography>°F</Typography>
      <Switch
        defaultChecked
        color="default"
        onChange={() => {
          if (unitsObj.units === 'metric') {
            setUnitsObj(
              {
                units: 'imperial',
                degSymbol: '°F',
                windSymbol: 'miles/h',
              },
            )
          } else {
            setUnitsObj(
              {
                units: 'metric',
                degSymbol: '°C',
                windSymbol: 'meters/s',
              },
            )
          }
        }}
      />
      <Typography>°C</Typography>
    </Stack>
  )
}
export default MetricSwitch
