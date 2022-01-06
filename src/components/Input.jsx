import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Input = ({ setInputCity, inputCity, handleClick }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) => {
          setInputCity(e.target.value)
        }}
        value={inputCity}
        variant="standard"
        placeholder="Search for a city..."
        color="grey"
        autoFocus
        onKeyDown={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment disablePointerEvents position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default Input
