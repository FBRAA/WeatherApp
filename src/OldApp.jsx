import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import Square from './Square'
import Form from './Form';

const StyledButton = styled.button`
  height: 30px;
  width: 70px;
  background-color: rosybrown;
  text-align: center;
`

const App = () => {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([1, 1])
  const [func, setFunc] = useState((prevState) => () => {})

  const handleClick = () => {
    setCount((prevState) => prevState + 1)
    setArray((prevState) => [...prevState, count])
  }

  console.log(func)

  return (
    <div>
      <StyledButton onClick={func}>
        {count}
      </StyledButton>
      {/* {array.map((el, index) => {
        const uniqueId = uuidv4()
        return (
          <Square
            onClick={() => console.log('square clicked')}
            number={el}
            key={uniqueId}
            yes
          />
        )
      })} */}
      {count < 5 && <Square />}
      <Form
        setFunc={setFunc}
      />
    </div>
  )
}

export default App
