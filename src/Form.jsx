import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 300px;
  height: 200px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BigParagraph = styled.p`
  font-size: 200%;
  color: red;
  font-weight: bold;
`

const Form = ({ setFunc }) => {
  const [textValue, setTextValue] = useState('John')
  const handleInput = (e) => {
    setTextValue(e.target.value)
  }

  const removeLastDigit = () => {
    setTextValue((prevState) => prevState.substring(0, prevState.length - 1))
  }

  useEffect(() => setFunc(() => removeLastDigit), [])

  return (
    <Container>
      <BigParagraph>{textValue}</BigParagraph>
      <input
        type='text'
        onChange={handleInput}
        value={textValue}
      />
    </Container>
  )
}

export default Form
