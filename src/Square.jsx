import React, { useEffect } from 'react'
import styled from 'styled-components'

const ColoredSquare = styled.div`
  background-color: brown;
  width: 200px;
  height: 200px;
  font-size: 40px;
  text-align: center;

`

const Square = ({ number, onClick, yes }) => {
  // console.log('SQUARE render')
  return (
    <>
      <ColoredSquare onClick={onClick}>
        {number}
      </ColoredSquare>
      <ColoredSquare>
        hahahah
      </ColoredSquare>
    </>
  )
}

export default Square
